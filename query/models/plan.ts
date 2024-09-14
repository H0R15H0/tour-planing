import { CamelCasedPropertiesDeep } from "type-fest";
import { Database, Tables } from "../database.types";
import { createClient } from "@/utils/supabase/server";

type Plan = CamelCasedPropertiesDeep<Database["public"]['Tables']["plans"]["Row"]>;

export async function getPlan(planId: string): Promise<Plan | null> {
  const supabase = createClient();
  // TODO: Add a check to see if the user is authorized to view this plan
  const { data } = await supabase.from("plans").select().eq('id', planId).returns<Tables<'plans'>[]>();

  return data == null ? null : {
    id: data[0].id,
    name: data[0].name,
    userId: data[0].user_id,
    createdAt: data[0].created_at,
    updatedAt: data[0].updated_at,
  }
}