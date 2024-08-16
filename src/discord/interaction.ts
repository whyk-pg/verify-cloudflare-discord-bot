import {
  type APIApplicationCommandInteraction,
  type APIInteraction,
  type APIInteractionResponse,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import { getCommandByName } from "../commands";

async function handleCommandInteraction(
  interaction: APIApplicationCommandInteraction,
): Promise<APIInteractionResponse | null> {
  const commandName = interaction.data.name;
  const command = getCommandByName(commandName);
  if (command) {
    return command.createResponse(interaction);
  }
  return { type: InteractionResponseType.Pong };
}

export const handleInteractionRequest = async (
  interaction: APIInteraction,
): Promise<APIInteractionResponse | null> => {
  switch (interaction.type) {
    case InteractionType.Ping:
      return { type: InteractionResponseType.Pong };
    case InteractionType.ApplicationCommand:
      return handleCommandInteraction(interaction);
  }
  throw new Error("Unknown interaction");
};
