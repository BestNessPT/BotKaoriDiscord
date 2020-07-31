const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Genius = new (require("genius-lyrics").Client)(process.env.GENIUS);
const execute = async (bot, msg, args) => {
  let music = args.join(" ");
  Genius.tracks
    .search(music)
    .then((results) => {
      const song = results[0];
      song.lyrics().then((lyrics) => {
        let Embed = new MessageEmbed().setDescription(lyrics);
        msg.channel.send(Embed);
      });
    })
    .catch((err) => console.error(err));
};

module.exports = {
  name: "lyrics",
  help: "Ele mostra a letra da música",
  execute,
};
