import { verifyKey } from "discord-interactions";
import { createMiddleware } from "hono/factory";
import type { HonoAppContext } from "./context";

export const verifyKeyMiddleware = createMiddleware<HonoAppContext>(
  async (c, next) => {
    const signature = c.req.header("X-Signature-Ed25519");
    const timestamp = c.req.header("X-Signature-Timestamp");
    const body = await c.req.raw.clone().arrayBuffer();

    const isValidRequest =
      !!signature &&
      !!timestamp &&
      (await verifyKey(body, signature, timestamp, c.env.DISCORD_PUBLIC_KEY));
    if (!isValidRequest) {
      console.log("Invalid request signature");
      return c.text("Bad request signature", 401);
    }

    return next();
  },
);
