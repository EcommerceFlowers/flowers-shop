import { z } from 'zod';

const ProjectENVSchema = z.object({
  NEXT_PUBLIC_APP_ENDPOINT: z.string().default('localhost:3000'),
  NEXT_PUBLIC_NAME: z.string().default(''),
  /**
   * Feature flags, comma separated
   */
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

/**
 * Return system ENV with parsed values
 */
export const ProjectENV = ProjectENVSchema.parse({
  NEXT_PUBLIC_APP_ENDPOINT: process.env.NEXT_PUBLIC_APP_ENDPOINT,
  NEXT_PUBLIC_NAME: process.env.NEXT_PUBLIC_NAME,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
});
