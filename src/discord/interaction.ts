import {
  type APIApplicationCommandInteraction,
  type APIInteraction,
  type APIInteractionResponse,
  type APIModalSubmitInteraction,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import { getCallbackByCustomId, getCommandByName } from "../commands";

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

const handleModalSubmitInteraction = async (
  interaction: APIModalSubmitInteraction,
): Promise<APIInteractionResponse | null> => {
  const customId = interaction.data.custom_id;
  const callback = getCallbackByCustomId(customId);
  if (callback) {
    return callback.createResponse(interaction);
  }
  return { type: InteractionResponseType.Pong };
};

export const handleInteractionRequest = async (
  interaction: APIInteraction,
): Promise<APIInteractionResponse | null> => {
  switch (interaction.type) {
    case InteractionType.Ping:
      return { type: InteractionResponseType.Pong };
    case InteractionType.ApplicationCommand:
      return handleCommandInteraction(interaction);
    case InteractionType.ModalSubmit:
      return handleModalSubmitInteraction(interaction);
  }
  throw new Error("Unknown interaction");
};
