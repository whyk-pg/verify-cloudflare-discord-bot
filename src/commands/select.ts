import {
  type APIMessageComponentSelectMenuInteraction,
  ComponentType,
  InteractionResponseType,
} from "discord-api-types/v10";
import type {
  DiscordCommand,
  DiscordComponentCallback,
  QuestionAndAnswer,
} from "./types";

const SELECT_CUSTOM_ID = "select";

const QUSTION_AND_ANSWER = [
  {
    label: "私の名前",
    value: "私の名前",
    description: "私の名前を知りたい？",
    answer: "遊馬賀樋香",
  },
  {
    label: "好きなお茶",
    value: "好きなお茶",
    description: "好きなお茶を知りたい？",
    answer: "さえみどり",
  },
  {
    label: "好きなアーティスト",
    value: "好きなアーティスト",
    description: "好きなアーティストを知りたい？",
    answer: "花譜",
  },
] satisfies QuestionAndAnswer[];
const options = QUSTION_AND_ANSWER.map((item) => ({
  label: item.label,
  value: item.value,
  description: item.description,
}));
const getAnswer = (value: string) =>
  QUSTION_AND_ANSWER.find((item) => item.value === value)?.answer;

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
                options,
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
    const typeSquashedInteraction =
      interaction as APIMessageComponentSelectMenuInteraction;
    const question = typeSquashedInteraction.data.values[0];

    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `${question}は、${getAnswer(question)}` ?? "答えはない……",
      },
    };
  },
} satisfies DiscordComponentCallback;
