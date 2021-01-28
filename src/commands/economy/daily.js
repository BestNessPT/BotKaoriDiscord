const Discord = require("discord.js");

const ms = require("parse-ms");

const { time } = require("console");

// MODELS
const Data = require("../../models/data.js");
const { DESTRUCTION } = require("dns");

const execute = async (bot, msg, args) => {
  let timeout = 43200000;
  let reward = [100, 200, 300, 400, 500];
  reward = reward[Math.floor(Math.random() * reward.length)];

  Data.findOne(
    {
      userID: msg.author.id,
    },
    (err, data) => {
      if (err) console.log(err);
      if (!data) {
        msg.reply("Hey, create an account first type: $create");
      } else {
        if (data.money == -1) return msg.reply("You are blocked!");
        if (timeout - (Date.now() - data.daily) > 0) {
          let time = ms(timeout - (Date.now() - data.daily));
          let description = [
            `Collect again in ${time.hours}h  ${time.minutes}m ${time.seconds}s`,
            `While you wait, add me to your server. [Invite me to your server!](${"https://discord.com/api/oauth2/authorize?client_id=730092279326441574&permissions=8&scope=bot"})`,
          ];
          let embed = new Discord.MessageEmbed()

          
            .setColor("#00FFFF")
            .setAuthor(
              msg.author.tag,
              msg.author.displayAvatarURL({ size: 4096, dynamic: true })
            )
            .setTitle("You already worked today!")
            .setDescription(description);
          return msg.channel.send(embed);
        } else {
          data.money += reward;

          data.daily = Date.now();

          data.save().catch((err) => console.log(err));
          let embed = new Discord.MessageEmbed()
            .setColor("#00FFFF")
            .setAuthor(
              msg.author.tag,
              msg.author.displayAvatarURL({ size: 4096, dynamic: true })
            )
            .setTitle("Congrats!")
            .setImage(
              "https://i.pinimg.com/originals/0c/b0/ae/0cb0aec97240b7d9746073cd3ba6c26f.gif"
            )
            .setDescription(`You received $${reward} for your work.`);
          return msg.channel.send(embed);
        }
      }
    }
  );
};

module.exports = {
  name: "work",
  section: "💸 Economy",
  help: "Daily command to win money in the economy system (12Hours cooldown)",
  usage: "work",
  example: "work",
  aliases: ['daily'],
  execute,
};
