const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const execute = async (bot, msg, args) => {
  var kaori = bot.users.cache.get("730092279326441574");
  let kaoriavatar = kaori.displayAvatarURL({ size: 4096, dynamic: true });
  var dev = bot.users.cache.get("513113161126248469");
  let devavatar = dev.displayAvatarURL({ size: 4096, dynamic: true });
  let Emebed = new MessageEmbed()
    .setAuthor("Kaori Miyazono#5192", kaoriavatar)
    .setColor("RANDOM")
    .setTitle("Invite!")
    .setDescription(
      `Thank you for invite me!\n💌 [Click here!](${"https://discord.com/api/oauth2/authorize?client_id=730092279326441574&permissions=8&scope=bot"})`
    )
    .setFooter(`Dev: ${dev.username}#${dev.discriminator}`, devavatar);
  return msg.channel.send(Emebed);
};

module.exports = {
  name: "invite",
  help: "help",
  execute,
};