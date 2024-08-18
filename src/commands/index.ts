import { inputModalCallback, inputModalCommand } from "./input";
import { pingCommand } from "./ping";
import { selectCommand, selectComponentCallback } from "./select";

const commands = [pingCommand, inputModalCommand, selectCommand];
export const commandsConfig = commands.map((item) => item.config);
export const commandsName = commands.map((item) => item.config.name);
export const getCommandByName = (name: string) =>
  commands.find((item) => item.config.name === name);

const modalCallbacks = [inputModalCallback];
export const getModalCallbackByCustomId = (customId: string) =>
  modalCallbacks.find((item) => item.config.customId === customId);

const componentCallbacks = [selectComponentCallback];
export const getComponentCallbackByCustomId = (customId: string) =>
  componentCallbacks.find((item) => item.config.customId === customId);
