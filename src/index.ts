import type { APIInteraction } from "discord-api-types/v10";
import { Hono } from "hono";
import type { HonoAppContext } from "./context";
import { handleInteractionRequest } from "./discord/interaction";
import { verifyKeyMiddleware } from "./middleware";

const app = new Hono<HonoAppContext>();

app.post("/api/interactions", verifyKeyMiddleware, async (c) => {
  const interaction = await c.req.json<APIInteraction>();
  const response = await handleInteractionRequest(interaction);
  if (response) {
    return c.json(response);
  }
  return c.text("OK", 200);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
