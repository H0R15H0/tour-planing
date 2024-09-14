import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PlanContainer } from "./_containers/plan";

export default async function PlanPage({
  params,
}: {
  params: { planId: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <PlanContainer planId={params.planId} />
  );
}
