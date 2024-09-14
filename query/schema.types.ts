import { CamelCasedPropertiesDeep, PickDeep } from 'type-fest'
import { Database } from './database.types'
export type { Json } from './database.types'

// Extract the row type from a table or view:
type ExtractRow<T> = {
  [K in keyof T]: T[K] extends { row: infer R } ? R : never;
};

// Override the type for a specific column in a view:
export type Schema = ExtractRow<CamelCasedPropertiesDeep<PickDeep<Database, 'public.Tables'>>['public']['tables']>;
