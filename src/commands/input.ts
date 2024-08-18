import {
  ComponentType,
  InteractionResponseType,
  TextInputStyle,
} from "discord-api-types/v10";
import type { DiscordCommand, DiscordSubmitCallback } from "./types";

const MODAL_CUSTOM_ID = "input_modal";

export const inputModalCommand = {
  config: {
    name: "input",
    description: "モーダル試したい",
  },
  createResponse(_interaction) {
    return {
      type: InteractionResponseType.Modal,
      data: {
        title: "Modalテスト中",
        custom_id: MODAL_CUSTOM_ID,
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.TextInput,
                custom_id: "title",
                label: "タイトル",
                style: TextInputStyle.Short,
                placeholder: "タイトルを入力してください……",
              },
            ],
          },
        ],
      },
    };
  },
} satisfies DiscordCommand;

export const inputModalCallback = {
  config: {
    customId: MODAL_CUSTOM_ID,
  },
  createResponse(interaction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: interaction.data.components[0].components[0].value, // 入力値がそのまま返ってくる
      },
    };
  },
} satisfies DiscordSubmitCallback;
