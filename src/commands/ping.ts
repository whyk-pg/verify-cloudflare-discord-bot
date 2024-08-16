import { InteractionResponseType } from "discord-api-types/v10";
import type { DiscordCommand } from "./types";

export const pingCommand = {
  config: {
    name: "ping",
    description: "ピンポンするだけ",
  },
  createResponse(_interaction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: { content: "pong!" },
    };
  },
} satisfies DiscordCommand;
