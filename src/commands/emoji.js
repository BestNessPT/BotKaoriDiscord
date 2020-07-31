const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const execute = async (bot, msg, args) => {
  let autor = msg.author.tag;

  const emoji = msg.content.slice(process.env.PREFIX.length).split(" ");

  function linhas2() {
    msg.delete().catch((O_o) => {});
    msg.channel.send("`" + `${autor}` + " Falou:`");
  }

  let emojis = [
    "$pensar",
    "$ping",
    "$ok",
    "$everione",
    "$putin",
    "$nessdance",
    "$coffin",
    "$triangulo",
    "$cafe",
    "$bob",
    "$megumin",
    "$penguin",
    "$fbi",
    "$gatinbonk",
    "$esqueletin",
    "$ban",
    "$burguei",
    "$gg",
    "$pew",
    "$yayaya",
    "$claps",
    "$happy_dance",
    "$sadeboy",
    "$villager",
    "$chibi_cola",
  ];

  let codes = [
    "<a:think:730802878540939376>",
    "<a:ping:730806930125357096>",
    "<a:Verify:718196468283998208>",
    "<a:everione:730817588971700316>",
    "<a:putin:730818930926682204>",
    "<a:ndance:730823266171617290>",
    "<a:coffin:730830013036756993>",
    "<a:triangulo:730832151326752821>",
    "<a:cafe:730834351969009735>",
    "<a:bob:730836127338201098>",
    "<a:megumin:730837546245947462>",
    "<a:penguin:730839758695170128>",
    "<a:fbi:730841604268490853>",
    "<a:gatinbonk:730894364498198669>",
    "<a:esqueletin:730895542552363019>",
    "<a:ban:730897367926308864>",
    "<a:burguei:730902876020408382>",
    "<a:gg:730904387949560009>",
    "<a:pew:730905496512495707>",
    "<a:yayaya:730906388049690797>",
    "<a:claps:730907838322573365>",
    "<a:happy_dance:731157405689315449>",
    "<a:sadeboy:731165082007896116>",
    "<a:villager:731166483274530837>",
    "<a:chibi_cola:731167866337886249>",
  ];

  switch (emoji[1]) {
    case "pensar":
      linhas2();
      msg.channel.send("<a:think:730802878540939376>");
      break;
    case "ping":
      linhas2();
      msg.channel.send("<a:ping:730806930125357096>");
      break;
    case "ok":
      linhas2();
      msg.channel.send("<a:ping:718196468283998208>");
      break;
    case "everione":
      linhas2();
      msg.channel.send("<a:everione:730817588971700316>");
      break;
    case "putin":
      linhas2();
      msg.channel.send("<a:putin:730818930926682204>");
      break;
    case "nessdance":
      linhas2();
      msg.channel.send("<a:ndance:730823266171617290>");
      break;
    case "coffin":
      linhas2();
      msg.channel.send("<a:coffin:730830013036756993>");
      break;
    case "triangulo":
      linhas2();
      msg.channel.send("<a:triangulo:730832151326752821>");
      break;
    case "cafe":
      linhas2(), msg.channel.send("<a:cafe:730834351969009735>");
      break;
    case "bob":
      linhas2();
      msg.channel.send("<a:bob:730836127338201098>");
      break;
    case "megumin":
      linhas2();
      msg.channel.send("<a:megumin:730837546245947462>");
      break;
    case "penguin":
      linhas2();
      msg.channel.send("<a:penguin:730839758695170128>");
      break;
    case "fbi":
      linhas2();
      msg.channel.send("<a:fbi:730841604268490853>");
      break;
    case "gatinbonk":
      linhas2();
      msg.channel.send("<a:gatinbonk:730894364498198669>");
      break;
    case "esqueletin":
      linhas2();
      msg.channel.send("<a:esqueletin:730895542552363019>");
      break;
    case "ban":
      linhas2();
      msg.channel.send("<a:ban:730897367926308864>");
      break;
    case "burguei":
      linhas2();
      msg.channel.send("<a:burguei:730902876020408382>");
      break;
    case "gg":
      linhas2();
      msg.channel.send("<a:gg:730904387949560009>");
      break;
    case "pew":
      linhas2();
      msg.channel.send("<a:pew:730905496512495707>");
      break;
    case "yayaya":
      linhas2();
      msg.channel.send("<a:yayaya:730906388049690797>");
      break;
    case "claps":
      linhas2();
      msg.channel.send("<a:claps:730907838322573365>");
      break;
    case "happy_dance":
      linhas2();
      msg.channel.send("<a:happy_dance:731157405689315449>");
      break;
    case "sadeboy":
      linhas2();
      msg.channel.send("<a:sadeboy:731165082007896116>");
      break;
    case "villager":
      linhas2();
      msg.channel.send("<a:villager:731166483274530837>");
      break;
    case "chibi_cola":
      linhas2();
      msg.channel.send("<a:chibi_cola:731167866337886249>");
      break;
    case "say":
      //CRIANDO MENSAGEM COM EMOJIS

      var message = "";
      emoji[0] = "";
      emoji[1] = "";
      emoji.forEach(function (item, index, array) {
        //console.log(emoji[index]);
        var i = 0;
        for (i = 0; i < 25; i++) {
          //for Js.
          //console.log(i)
          //console.log(emojis[i]);
          if (emoji[index] != emojis[i]) {
            //console.log('if');
          } else {
            //console.log('else');
            emoji[index] = codes[i];
            // message = message + codes[i];
          }
        }

        message = message + " " + emoji[index];
      });
      let mesg = ["`" + `${autor}` + " Falou:`", message];
      //FIM
      msg.delete().catch((O_o) => {});
      msg.channel.send(mesg);
      break;
    default:
      list(bot, msg, args);
      break;
  }
};

const list = async (bot, msg, args) => {
  let lista = [
    "-----------------------",
    "<a:think:730802878540939376> => **$emoji pensar**",
    "<a:ping:730806930125357096> => **$emoji ping**",
    "<a:Verify:718196468283998208> => **$emoji ok**",
    "<a:everione:730817588971700316> => **$emoji everione**",
    "<a:putin:730818930926682204> => **$emoji putin**",
    "<a:ndance:730823266171617290> => **$emoji nessdance**",
    "<a:coffin:730830013036756993> => **$emoji coffin**",
    "<a:triangulo:730832151326752821> => **$emoji triangulo**",
    "<a:cafe:730834351969009735> => **$emoji cafe**",
    "<a:bob:730836127338201098> => **$emoji bob**",
    "<a:megumin:730837546245947462> => **$emoji megumin**",
    "<a:penguin:730839758695170128> => **$emoji penguin**",
    "<a:fbi:730841604268490853> => **$emoji fbi**",
    "<a:gatinbonk:730894364498198669> => **$emoji gatinbonk**",
    "<a:esqueletin:730895542552363019> => **$emoji esqueletin**",
    "<a:ban:730897367926308864> => **$emoji ban**",
    "<a:burguei:730902876020408382> => **$emoji burguei**",
    "<a:gg:730904387949560009> => **$emoji gg**",
    "<a:pew:730905496512495707> => **$emoji pew**",
    "<a:yayaya:730906388049690797> => **$emoji yayaya**",
    "<a:claps:730907838322573365> => **$emoji claps**",
    "<a:happy_dance:731157405689315449> => **$emoji happy_dance**",
    "<a:sadeboy:731165082007896116> => **$emoji sadeboy**",
    "<a:villager:731166483274530837> => **$emoji villager**",
    "<a:chibi_cola:731167866337886249> => **$emoji chibi_cola**",
    "-----------------------",
    "$emoji say | Sua mensagem com emojis!",
    "$emoji say Bom dia $putin",
  ];

  let Embed = new MessageEmbed()
    .setTitle("<a:Nitro:718196422582861906> Vc n tem nitro? Use isto:")
    .setDescription(lista)
    .setColor(`RANDOM`);
  msg.delete().catch((O_o) => {});
  msg.channel.send(Embed);
};

module.exports = {
  name: "emoji",
  help: "Emojis sem nitro!",
  execute,
};
