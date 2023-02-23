import { z } from "zod";

export const serverScheme = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  ENABLE_VC_BUILD: z.string().default("1").transform((v) => parseInt(v)),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  DISCORD_BOT_TOKEN: z.string(),
  DISCORD_GUILD_ID: z.string(),
  DISCORD_INVITE_LINK: z.string().optional(),
  AUTH_SECRET: z.string(),
  AUTH_TRUST_HOST: z.string().optional(),
  NEXTAUTH_URL: z.string().optional(),
  AUTH0_CLIENT_ID: z.string(),
  AUTH0_CLIENT_SECRET: z.string(),
  AUTH0_DOMAIN: z.string(),
  // DATABASE_URL: z.string(),
  // UPSTASH_REDIS_REST_URL: z.string(),
  // UPSTASH_REDIS_REST_TOKEN: z.string(),
});

export const clientScheme = z.object({
  MODE: z.enum(['development', 'production', 'test']).default('development'),
});
