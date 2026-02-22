# SynapseBeats Discord Bot

A highly modular Discord music bot using Shoukaku and Kazagumo with Lavalink integration.

## Overview
SynapseBeats is a high-performance music bot designed for Discord, featuring dynamic image generation for "Now Playing" cards and advanced playlist management.

## Project Structure
```
src/
├── commands/          - Bot commands (info, music, misc)
├── config/            - Configuration files (config.js, emoji.js, radio.js)
├── database/          - SQLite database handlers (Better-SQLite3)
├── events/            - Discord and Kazagumo event handlers
├── managers/          - Core logic managers (Music, Player, Queue, Embed, etc.)
├── structures/        - Bot client, command, and canvas structures
├── utils/             - Utility functions and logger
├── index.js           - Main bot entry point
└── shard.js           - Shard manager (entry point for scaling)
```

## Features
- **Dynamic Image Generation**: Uses `@napi-rs/canvas` to create custom "Now Playing" cards with glassmorphism effects.
- **Music Playback**: High-quality streaming from Spotify, YouTube, SoundCloud, and Deezer.
- **Advanced Queue**: Support for shuffling, looping, and autoplay.
- **Playlists**: Create and manage custom music playlists stored in SQLite.
- **Branding**: Fully customized for **Axon Innova**.

## Environment Variables
- `DISCORD_TOKEN` - (Required) Your Discord bot token
- `BOT_PREFIX` - (Optional) Command prefix, defaults to `s.`
- `OWNER_IDS` - (Optional) Discord user IDs for bot owners

## Running the Bot
```bash
npm start
```

## Credits
- **Founder**: Atharv
- **Developed by**: [Axon Innova](https://dsc.gg/axoninnova)
- **Invite**: [dsc.gg/axoninnova](https://dsc.gg/axoninnova)

## Recent Changes
- 2026-01-18: Rebranded to **SynapseBeats**.
- 2026-01-18: Updated status to "s.help for help | s. prefix".
- 2026-01-18: Consolidated documentation and updated branding in code headers.
