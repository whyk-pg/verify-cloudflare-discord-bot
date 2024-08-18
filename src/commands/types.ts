import type {
  APIApplicationCommandInteraction,
  APIInteractionResponse,
  APIModalSubmitInteraction,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
} from "discord-api-types/v10";

export interface DiscordCommand {
  config: RESTPostAPIChatInputApplicationCommandsJSONBody;
  createResponse: (
    interaction: APIApplicationCommandInteraction,
  ) => APIInteractionResponse;
}

export interface DiscordSubmitCallback {
  config: {
    customId: string;
  };
  createResponse: (
    interaction: APIModalSubmitInteraction,
  ) => APIInteractionResponse;
}
