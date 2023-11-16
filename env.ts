/**
 * This file will export all env with typing for app to use
 * Flow: Add into .env => bind into next.config => export in env.ts
 */

import getConfig from 'next/config';
import { z } from 'zod';

const SystemENVParser = z.object({
  IS_DEV: z.boolean(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
});

const { publicRuntimeConfig } = getConfig();

/**
 * True if running in production
 */
export const ProjectENV = SystemENVParser.parse(publicRuntimeConfig);
