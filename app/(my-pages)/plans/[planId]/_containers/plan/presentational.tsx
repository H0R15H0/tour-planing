import { Plan } from "@/lib/fetcher/types";

export default async function PlanPresentation({plan}: { plan: Plan}) { // TODO: Fix type of plan
  return (
    <div>
      <h1>Plan</h1>
      <p>{plan.name}</p>
      <p>{plan.createdAt}</p>
    </div>
  )
}
