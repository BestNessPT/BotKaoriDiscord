const Discord = require("discord.js");

const mongoose = require("mongoose");

//CONNECT TO DATABASE
mongoose.connect(process.env.mongoPass, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MODELS
const Data = require("../../models/data.js");

const execute = async (bot, msg, args) => {
  Data.findOne(
    {
      userID: msg.author.id,
    },
    (err, data) => {
      if (err) console.log(err);
      if (!data) {
        msg.reply("Hey, create an account first type: $create"); //
      } else {
        if (data.money == -1) return msg.reply("You are blocked!");

        if (data.money <= 0) return msg.reply("You Don´t have money"); //

        if (!args[0]) return msg.reply("Please specify a bet.");

        if (!Number.isInteger(parseInt(args[0])))
          return msg.reply("Hey, that's not a whole number >:(");

        var bet = parseInt(args[0]);

        if (bet <= 0) {
          return msg.reply("Hey, that's not a whole number >:(");
        }

        if (data.money < bet)
          return msg.reply("You Don't have that much to bet"); //

        let chances = ["win", "lose"];

        var pick = chances[Math.floor(Math.random() * chances.length)];

        if (pick == "lose") {
          data.money -= bet;
          data.save().catch((err) => console.log(err));
          let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.author.tag)
            .setTitle("Bet!")
            .setImage(
              "https://25.media.tumblr.com/tumblr_mbyqs6R9z61rfjlumo1_500.gif"
            )
            .setThumbnail(
              msg.author.displayAvatarURL({ size: 4096, dynamic: true })
            )
            .setDescription(
              `$${args[0]}, You lost. \nNew Balance: $${data.money}`
            );
          return msg.channel.send(embed);
        } else {
          data.money += bet;
          data.save().catch((err) => console.log(err));
          let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.author.tag)
            .setTitle("Bet!")
            .setImage(
              "https://25.media.tumblr.com/tumblr_mbyqs6R9z61rfjlumo1_500.gif"
            )
            .setThumbnail(
              msg.author.displayAvatarURL({ size: 4096, dynamic: true })
            )
            .setDescription(
              `$${args[0]}, You win. \nNew Balance: $${data.money}`
            );
          return msg.channel.send(embed);
        }
      }
    }
  );
};

module.exports = {
  name: "gamble",
  helpEconomy: "gamble your money, economy system",
  execute,
};
