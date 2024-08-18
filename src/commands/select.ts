import { type APIMessageComponentSelectMenuInteraction, ComponentType, InteractionResponseType } from "discord-api-types/v10";
import type { DiscordCommand, DiscordComponentCallback } from "./types";

const SELECT_CUSTOM_ID = "select";

export const selectCommand = {
  config: {
    name: "select",
    description: "選択するだけ",
  },
  createResponse(_interaction) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: "何を知りたいか",
        components: [
          {
            type: ComponentType.ActionRow,
            components: [
              {
                type: ComponentType.StringSelect,
                custom_id: SELECT_CUSTOM_ID,
                placeholder: "何かを選択してね",
                options: [
                  {
                    label: "私の名前",
                    value: "私の名前",
                    description: "私の名前を知りたい？",
                  },
                  {
                    label: "好きなお茶",
                    value: "好きなお茶",
                    description: "好きなお茶を知りたい？",
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
} satisfies DiscordCommand;

export const selectComponentCallback = {
  config: {
    customId: SELECT_CUSTOM_ID,
  },
  createResponse(interaction) {
    // StringSelectであることは明白なため、専用の型定義で型キャストしている
    const typeSquashedInteraction = interaction as APIMessageComponentSelectMenuInteraction

    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: typeSquashedInteraction.data.values[0],
      },
    };
  },
} satisfies DiscordComponentCallback;
