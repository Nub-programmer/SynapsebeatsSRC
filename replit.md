# Avon Discord Music Bot

## Overview
A highly modular Discord music bot using Shoukaku and Kazagumo with Lavalink integration. The bot supports music playback from various sources including Spotify, Deezer, and Apple Music.

## Project Structure
```
src/
├── commands/          - Bot commands (info, music, misc)
├── config/            - Configuration files
│   ├── config.js      - Main config (token, Lavalink nodes, Spotify)
│   ├── emoji.js       - Emoji configurations
│   └── radio.js       - Radio station presets
├── database/          - SQLite database handlers
├── events/            - Discord event handlers
├── managers/          - Core managers (Music, Player, Queue, etc.)
├── structures/        - Bot client and command structures
├── utils/             - Utility functions
├── index.js           - Main bot entry point
└── shard.js           - Shard manager (entry point)
```

## Environment Variables
- `DISCORD_TOKEN` - (Required) Your Discord bot token
- `BOT_PREFIX` - (Optional) Command prefix, defaults to `.`
- `OWNER_IDS` - (Optional) Comma-separated Discord user IDs for bot owners

## Running the Bot
```bash
npm start
```

## Development
```bash
npm run dev
```

## Requirements
- Node.js v18+
- A valid Discord bot token
- Lavalink server (pre-configured with public node)

## Databases
Uses SQLite databases stored in `./database/`:
- guild.db - Server settings
- user.db - User preferences
- player.db - Player states
- spotify.db - Spotify integration data
- premium.db - Premium features

## Recent Changes
- 2026-01-18: Initial Replit setup
  - Updated config.js to use environment variables
  - Created .gitignore for Node.js
  - Set up workflow for running the bot
