import type {
  APIApplicationCommandInteraction,
  APIInteractionResponse,
  APIMessageComponentInteraction,
  APIModalSubmitInteraction,
  APISelectMenuOption,
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

export interface DiscordComponentCallback {
  config: {
    customId: string;
  };
  createResponse: (
    interaction: APIMessageComponentInteraction,
  ) => APIInteractionResponse;
}

export interface QuestionAndAnswer extends APISelectMenuOption {
  answer: string;
}
