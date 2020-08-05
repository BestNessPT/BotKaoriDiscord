const playSong = require("./play").playSong;
const Discord = require("discord.js");
const execute = async (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("There is no music playing!");
  }
  queue.songs.shift();
  bot.queues.set(msg.guild.id, queue);
  playSong(bot, msg, queue.songs[0]);
};

module.exports = {
  name: "skip",
  help: "Ele passa para a proxima música",
  execute,
};
