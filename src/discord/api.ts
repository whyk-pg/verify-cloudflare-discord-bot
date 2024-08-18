import type { RESTPutAPIApplicationGuildCommandsJSONBody } from "discord-api-types/v10";

/**
 * DiscordのAPI URL
 * @see https://discord.com/developers/docs/reference#api-versioning
 */
const BASE_URL = "https://discord.com/api/v10";

/**
 * DiscordのREST APIでの一連の制御
 */
export class DiscordClient {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async request(
    url: string,
    method: string,
    body: unknown,
    headers = {},
  ) {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${this.token}`,
        ...headers,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const text = await response.text();
      console.error(text);
      throw new Error(
        `Failed to request ${url}: ${response.status} ${response.statusText}`,
      );
    }
    return response;
  }

  /**
   * Discord上のコマンド一括上書き
   * @see https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands
   * @param applicationId Discord Application ID
   * @param guildId Discord Guild ID
   * @param commands コマンド設定群
   * @returns Fetch APIのレスポンス
   */
  public async overrideGuildApplicationCommands(
    applicationId: string,
    guildId: string,
    commands: RESTPutAPIApplicationGuildCommandsJSONBody,
  ) {
    return this.request(
      `${BASE_URL}/applications/${applicationId}/guilds/${guildId}/commands`,
      "PUT",
      commands,
    );
  }
}
