import { inputModalCallback, inputModalCommand } from "./input";
import { pingCommand } from "./ping";

const commands = [pingCommand, inputModalCommand];
export const commandsConfig = commands.map((item) => item.config);
export const commandsName = commands.map((item) => item.config.name);
export const getCommandByName = (name: string) =>
  commands.find((item) => item.config.name === name);

const callbacks = [inputModalCallback];
export const getCallbackByCustomId = (customId: string) =>
  callbacks.find((item) => item.config.customId === customId);
