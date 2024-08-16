export interface Env {
  DISCORD_TOKEN: string;
  DISCORD_PUBLIC_KEY: string;
  DISCORD_APPLICATION_ID: string;
  DISCORD_GUILD_ID: string;
}

export type HonoAppContext = { Bindings: Env };
