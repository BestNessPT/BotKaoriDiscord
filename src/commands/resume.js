const Discord = require("discord.js");
const execute = async (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("There is no paused music!");
  }

  queue.dispatcher.resume();
  msg.reply("Resume!").then((sentMsg) => {
    sentMsg.react("▶️");
  });
};

module.exports = {
  name: "resume",
  help: "Ele continua a música pausada",
  execute,
};
