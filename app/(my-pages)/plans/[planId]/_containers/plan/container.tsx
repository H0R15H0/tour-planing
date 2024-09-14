import { fetchPlan } from '@/lib/fetcher/plan';
import PlanPresentation from './presentational';

export default async function PlanContainer({planId}: { planId: string}) {
  const plan = await fetchPlan(planId);

  if (!plan) {
    return <div>Plan not found</div> // TODO: 404 page
  }

  return (
    <PlanPresentation plan={plan} />
  )
}