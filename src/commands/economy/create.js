// MODELS
const Data = require("../../models/data.js");

const execute = async (bot, msg, args) => {
  Data.findOne(
    {
      userID: msg.author.id,
    },
    async (err, data) => {
      if (err) console.log(err);
      if (!data) {
        const newData = new Data({
          name: msg.author.username,
          userID: msg.author.id,
          lb: "all",
          money: 500,
          daily: 0,
          say: false,
          skin: "normal",
          rings: 1,
          waifus: "",
        });
        newData.save().catch((err) => console.log(err));
        return msg.reply("Created, type: $bal");
      } else {
        return msg.reply("You already have an account, type: $bal");
      }
    }
  );
};

module.exports = {
  name: "create",
  section: "💸 Economy",
  help: "Create an economy account for you!",
  usage: "create",
  example: "create",
  execute,
};
