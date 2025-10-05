import { Client, GatewayIntentBits, ActivityType } from "discord.js"
import fs from "fs"

const config = JSON.parse(fs.readFileSync("./config.json", "utf8"))
const token = process.env.DISCORD_TOKEN

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
})

function getRandomInterval() {
  const min = config.minIntervalMinutes * 60 * 1000
  const max = config.maxIntervalMinutes * 60 * 1000
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

async function sendBeep() {
  const guilds = Array.from(client.guilds.cache.values())

  if (guilds.length === 0) return

  const guild = getRandomElement(guilds)

  try {
    if (config.useDMs) {
      await guild.members.fetch()
      const members = Array.from(guild.members.cache.values()).filter((m) => !m.user.bot)

      if (members.length === 0) return

      const member = getRandomElement(members)
      await member.send(config.message)
      console.log(`Sent DM to ${member.user.tag} in ${guild.name}`)
    } else {
      const channels = Array.from(guild.channels.cache.values()).filter(
        (c) => c.isTextBased() && c.permissionsFor(guild.members.me).has("SendMessages"),
      )

      if (channels.length === 0) return

      const channel = getRandomElement(channels)
      await channel.send(config.message)
      console.log(`Sent message to #${channel.name} in ${guild.name}`)
    }
  } catch (error) {
    console.error("Error sending message:", error)
  }

  scheduleNextBeep()
}

function scheduleNextBeep() {
  const interval = getRandomInterval()
  console.log(`Next beep in ${Math.round(interval / 60000)} minutes`)
  setTimeout(sendBeep, interval)
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)

  client.user.setPresence({
    activities: [{ name: "for Fires", type: ActivityType.Watching }],
    status: "online",
  })

  scheduleNextBeep()
})

client.login(token)
