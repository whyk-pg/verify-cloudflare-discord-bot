import { pingCommand } from "./ping";

const commands = [pingCommand];
export const commandsConfig = commands.map((item) => item.config);
export const commandsName = commands.map((item) => item.config.name);
export const getCommandByName = (name: string) => commands.find((item) => item.config.name === name)
