import { commandsConfig, commandsName } from "../src/commands";
import { DiscordApi } from "../src/discord/api";

const registerCommand = async (): Promise<void> => {
  const discordToken = process.env.DISCORD_TOKEN;
  const applicationId = process.env.DISCORD_APPLICATION_ID;
  const guildId = process.env.DISCORD_GUILD_ID;

  if (!discordToken || !applicationId || !guildId) {
    console.error({ discordToken, applicationId, guildId });
    throw new Error("環境変数が足りません");
  }

  console.log(`${commandsName.join("と")}のコマンドを登録しています`);
  const discord = new DiscordApi(discordToken);
  await discord.overrideGuildApplicationCommands(
    applicationId,
    guildId,
    commandsConfig,
  );
  console.log("コマンド登録完了");
};

registerCommand().catch((reason) => console.error(reason));
