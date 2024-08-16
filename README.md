# Verify Discord Bot on Cloudflare

## 本リポジトリの目的
Cloudflare上でユーザーの~~コメント~~コマンドに反応して動作するDiscord Botを作成する

## 本リポジトリの達成目標
- [x] HonoでDiscord Botを構築
  - [x] Commandsを登録できること
  - [x] Commandsを実行できること
- [x] ngrokでDiscord Botを疎通
- [ ] Cloudflare WorkersにDiscord Botをホスティング

### リアルタイムにメッセージを受け取って、その中からキーワードを抜き出して反応したい場合
DiscordはGateway APIというものを提供しており、そのAPIとWebSocketでやり取りすることで、作られたメッセージをもとに反応することができる。  
ただ、そうした場合リクエストで駆動するCloudflare Workersでは動作せず、Renderなど別サービスが必要になる。

## 参考資料
- [discord/cloudflare-sample-app: Example discord bot using Cloudflare Workers](https://github.com/discord/cloudflare-sample-app)
- [Discord Developer Portal — Documentation — Hosting on Cloudflare Workers](https://discord.com/developers/docs/tutorials/hosting-on-cloudflare-workers)
- [Hono + Cloudflareでもくもく会用のDiscord Botを作ってみた](https://zenn.dev/ryo_kawamata/articles/hono-cloudflare-discord-app)
- [Cloudflare Workers + HonoでDiscord botを作る際のポイント | Marginalia](https://blog.lacolaco.net/posts/discord-bot-cfworkers-hono/)
- [lacolaco/discord-rotom-bot](https://github.com/lacolaco/discord-rotom-bot)
- [discord/discord-interactions-js: JS/Node helpers for Discord Interactions](https://github.com/discord/discord-interactions-js)
- [discordjs/discord-api-types: Up to date Discord API Typings, versioned by the API version](https://github.com/discordjs/discord-api-types)
- [Discord Developer Portal — Documentation — Gateway](https://discord.com/developers/docs/topics/gateway)
