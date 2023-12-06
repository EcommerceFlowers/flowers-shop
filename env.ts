import { z } from 'zod';

const ProjectENVSchema = z.object({
  NEXT_PUBLIC_APP_ENDPOINT: z.string().default('localhost:3000'),
  NEXT_PUBLIC_NAME: z.string().default(''),
  /**
   * Feature flags, comma separated
   */
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

/**
 * Return system ENV with parsed values
 */
export const ProjectENV = ProjectENVSchema.parse({
  NEXT_PUBLIC_APP_ENDPOINT: process.env.NEXT_PUBLIC_APP_ENDPOINT,
  NEXT_PUBLIC_NAME: process.env.NEXT_PUBLIC_NAME,
});
