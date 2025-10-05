# No Need to Credit me its just as shrimple as that

A Discord bot that randomly sends "beep" to channels or DMs at random intervals.

## Features

- Randomly sends messages to channels or DMs users
- Configurable intervals and message content
- Custom status display
- Lightweight and simple

## Configuration

Edit `config.json` to customize the bot:

- `minIntervalMinutes`: Minimum time between messages (default: 30)
- `maxIntervalMinutes`: Maximum time between messages (default: 180)
- `useDMs`: Set to `true` for DMs, `false` for channel messages
- `message`: The message to send (default: "beep")

## Local Setup

1. Install Node.js (v16.9.0 or higher)
2. Clone or download this repository
3. Run `npm install` to install dependencies
4. Copy `.env.example` to `.env`
5. Add your Discord bot token to `.env`
6. Run `npm start` to start the bot

## Discord Bot Setup

1. Go to https://discord.com/developers/applications
2. Click "New Application" and give it a name
3. Go to the "Bot" section and click "Add Bot"
4. Enable these Privileged Gateway Intents:
   - Server Members Intent
   - Message Content Intent
5. Copy the bot token and add it to your `.env` file
6. Go to OAuth2 > URL Generator
7. Select scopes: `bot`
8. Select permissions: `Send Messages`, `Read Messages/View Channels`
9. Copy the generated URL and open it to invite the bot to your server

## Pelican Panel Setup

### Configuring the Node.js Egg

1. Log into your Pelican Panel admin dashboard
2. Navigate to "Servers" > "Create New"
3. Select the "Node.js" egg from the available eggs
4. Configure the server settings:
   - **Memory**: 512MB minimum
   - **Disk Space**: 1GB minimum
   - **CPU Limit**: 50% minimum
   - **Allocations**: Select an available port

### Egg Startup Configuration

1. In the server creation or settings page, configure the startup settings:
   - **Startup Command**: `npm start`
   - **Node Version**: 18 or higher
   - **Main File**: `index.js`
2. Set environment variables in the "Startup" tab:
   - Variable: `DISCORD_TOKEN`
   - Value: Your Discord bot token
3. Enable "Auto Start" so the bot restarts automatically

### Deploying the Bot Files

1. Access your server's file manager in Pelican Panel
2. Upload all bot files:
   - `index.js`
   - `package.json`
   - `config.json`
3. Open the server console
4. Run the installation command:
```bash
npm install
```
5. Start the bot using the start button or:
```bash
npm start
```

### Environment Variables Setup

In the Pelican Panel "Startup" tab, add these variables:

- **DISCORD_TOKEN**: Your Discord bot token from the Developer Portal
- **NODE_ENV**: production (optional)

### Managing the Bot

- **View Logs**: Check the console tab in Pelican Panel
- **Restart Bot**: Use the restart button in the server controls
- **Update Config**: Edit `config.json` through the file manager and restart
- **Update Bot**: Upload new files and restart the server
- **Change Settings**: Modify startup variables in the "Startup" tab

## Troubleshooting

- **Bot not responding**: Check that all intents are enabled in Discord Developer Portal
- **Permission errors**: Ensure the bot has proper permissions in your Discord server
- **Connection issues**: Verify your bot token is correct in environment variables
- **Pelican issues**: Check server logs in the console tab for error messages
- **Egg not found**: Ensure your Pelican Panel has the Node.js egg installed
