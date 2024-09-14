import { CamelCasedPropertiesDeep } from "type-fest";
import { Database, Tables } from "../database.types";
import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'

type Plan = CamelCasedPropertiesDeep<Database["public"]['Tables']["plans"]["Row"]>;

export async function getPlan(planId: string): Promise<Plan | null> {
  const supabase = createClient();
  const userResponse = await supabase.auth.getUser()
  if (userResponse.error || !userResponse.data?.user) {
    redirect('/login')
  }
  const user = userResponse.data.user;

  const { data } = await supabase.from("plans").select().eq('id', planId).returns<Tables<'plans'>[]>();
  if (!data) {
    return null;
  }

  const plan = data[0];
  if (plan.user_id !== user.id) {
    return null;
  }

  return {
    id: plan.id,
    name: plan.name,
    userId: plan.user_id,
    createdAt: plan.created_at,
    updatedAt: plan.updated_at,
  }
}