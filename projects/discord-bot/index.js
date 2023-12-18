const { Client, GatewayIntentBits } = require("discord.js");

const constants = require("./utils/constants");
const port = constants.PORT;

// discord config
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// message create
client.on("messageCreate", (message) => {
  console.log(message.content);

  if (message.author.bot) return;

  message.reply({
    content: "Hey! Hi I'm Bot, How can I help you",
  });
});

// interaction
client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong...!");
});
// login
client.login(constants.BOT_KEY);
