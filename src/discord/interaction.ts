import {
  type APIApplicationCommandInteraction,
  type APIInteraction,
  type APIInteractionResponse,
  type APIMessageComponentInteraction,
  type APIModalSubmitInteraction,
  InteractionResponseType,
  InteractionType,
} from "discord-api-types/v10";
import {
  getCommandByName,
  getComponentCallbackByCustomId,
  getModalCallbackByCustomId,
} from "../commands";

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
  const callback = getModalCallbackByCustomId(customId);
  if (callback) {
    return callback.createResponse(interaction);
  }
  return { type: InteractionResponseType.Pong };
};

const handleMessageComponentInteraction = async (
  interaction: APIMessageComponentInteraction,
): Promise<APIInteractionResponse | null> => {
  const customId = interaction.data.custom_id;
  const callback = getComponentCallbackByCustomId(customId);
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
    case InteractionType.MessageComponent:
      return handleMessageComponentInteraction(interaction);
  }
  throw new Error("Unknown interaction");
};
