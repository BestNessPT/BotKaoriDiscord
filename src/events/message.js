const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const firebase = require("firebase");
const database = firebase.database();

let cooldown = new Set();

const message = async (bot, msg) => {
  const getPrefix = require("./../util/prefix.js").getPrefix;
  //? Exceções
  if (msg.channel.type == "DM") return;
  if (msg.author.bot) return;

  //?Xp

  database
    .ref(`Servidores/Levels/${msg.guild.id}/Config`)
    .once("value")
    .then(async function (db) {
      if (db.val() == null) {
        database.ref(`Servidores/Levels/${msg.guild.id}/Config`).set({
          systemXp: "off",
          channelXp: "off",
          systemWelcome: "off",
          channelWelcome: "off",
          systemLogs: "off",
          channelLogs: "off",
          prefix: "$",
        });
      } else if (db.val().systemXp == "on") {
        //console.log(db.val().channelXp);
        let lvlChannel = db.val().channelXp;
        database
          .ref(`Servidores/Levels/${msg.guild.id}/${msg.author.id}`)
          .once("value")
          .then(async function (db) {
            if (db.val() == null) {
              database
                .ref(`Servidores/Levels/${msg.guild.id}/${msg.author.id}`)
                .set({
                  lb: "all",
                  xp: 0,
                  level: 1,
                });
            } else {
              let gerarXP = Math.floor(Math.random() * 10) + 1;

              if (db.val().level * 100 <= db.val().xp) {
                database
                  .ref(`Servidores/Levels/${msg.guild.id}/${msg.author.id}`)
                  .update({
                    xp: 0,
                    level: db.val().level + 1,
                  });

                console.log(lvlChannel);
                let Embed = new MessageEmbed()
                  .setColor("RANDOM")
                  .setDescription(
                    `Congrats, ${msg.author}! Level up ${db.val().level + 1}!`
                  );
                bot.channels.cache.get(lvlChannel).send(Embed);
              } else {
                database
                  .ref(`Servidores/Levels/${msg.guild.id}/${msg.author.id}`)
                  .update({
                    xp: db.val().xp + gerarXP,
                  });
              }
            }
          });
      }
    });

  //? Prefix
  const prefix = await getPrefix(msg.member.guild.id);
  if (
    msg.mentions.has(bot.user) &&
    msg.content.split(" ").length === 1 &&
    msg.content != "@everyone" &&
    msg.content != "@here"
  )
    return msg.reply(
      "HEY, \nMy prefix is `" +
        prefix +
        "`\nIf you want help use `" +
        prefix +
        "help`"
    );

  if (
    msg.content.startsWith(`<@!${bot.user.id}>`) ||
    msg.content.startsWith(`<@${bot.user.id}>`)
  )
    return;

  if (!msg.content.startsWith(prefix)) return;

  //--------------------------------------------

  //? Command execute and cooldown

  let cdseconds = 2;

  const args = msg.content.slice(prefix.length).split(" ");

  const cmdName = args.shift().toLowerCase();
  
  const cmd = bot.commands.get(cmdName)
    || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))

  if(!cmd) return;

  try {
    if (cooldown.has(msg.author.id)) {
      msg.delete().catch((O_o) => {});
      return msg
        .reply("You need to wait 2 seconds between commands.")
        .then((msg) => msg.delete({ timeout: 1500 }));
    }
    cooldown.add(msg.author.id);
    setTimeout(() => {
      cooldown.delete(msg.author.id);
    }, cdseconds * 1000);
    cmd.execute(bot, msg, args);
  } catch (e) {
    //return msg.reply("Ops! Eu ainda não conheço esse comando!");
  }

  //?

  //--------------------------------------------

  //? Logs de comandos
  let arg = msg.content.split(" ");
  var title = arg[0];

  const embed = new Discord.MessageEmbed()
    .setColor("#DE3B72")
    .setAuthor(msg.author.tag)
    .setTitle(title)
    .setDescription(`**Conteúdo:** ${msg.content}`);
  bot.channels.cache.get("771007139598172191").send(embed);
  //?
};

module.exports = {
  message,
};
