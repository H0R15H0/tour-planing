import { getPlan } from '@/query/models/plan'
import { Plan } from './types'

export async function fetchPlan(planId: string): Promise<Plan | null> {
  return await getPlan(planId)
}