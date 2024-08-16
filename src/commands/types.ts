import type {
  APIApplicationCommandInteraction,
  APIInteractionResponse,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
} from "discord-api-types/v10";

export interface DiscordCommand {
  config: RESTPostAPIChatInputApplicationCommandsJSONBody;
  createResponse: (
    interaction: APIApplicationCommandInteraction,
  ) => APIInteractionResponse;
}
