
const Discord = require('discord.js');
const moment = require('moment');
const fs = require('fs');
const client = new Discord.Client();
const prefix = "$";
client.on('ready', () => {
client.channels.get("500977914133610497").join();
client.user.setStatus('dnd');
client.user.setGame("Elite Skill.,", "https://twitch.tv/idk");
console.log('Elite Skill Is Ready!');
});


 client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('512960783353643018');
  let em = client.emojis.find(e => e.name === "false");
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '488259622730203137') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن آسم المراد رفضه.");

  acRoom.send(`**»** ${mention}\n**»** مرفوض\n\n**»** ${em}`)
  }
});
 
 
client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('512960783353643018');
  let em = client.emojis.find(e => e.name === "true");
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '488259622730203137') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن آسم المراد قبوله');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**»** ${mention}\n**»** ${mySupport}\n\n**»** ${em}`);
    });
  }
});



client.on('message', async message => {

  if(message.content.startsWith("$ادارة")) {

    await message.channel.send("**ماهو سبب تقديمك بالدخول الى طآقم الادارة؟**").then(e => {

    let filter = m => m.author.id === message.author.id

    let lan = '';

    let md = '';

    let br = '';

    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })

    .then(collected => {

      lan = collected.first().content

      collected.first().delete()

e.delete();

     message.channel.send('**ماهي خبرآتك بأختصار؟**').then(m => {

let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })

.then(co => {

  md = co.first().content

        co.first().delete()

        m.delete();

message.channel.send('**هل توافق؟**\n\nان تتفاعل يوميا دون إنقطاع\nان تقوم بالمساعدة لكل الاعضاء\nان تقوم بمساعدة الادارة\nان تحاول ادخال 10 اعضاء للفريق\n\nإذا كنت موافق فأرسل : نعم\n\nإذا كنت غير موافق فأرسل : لا\n\nالمقدم : <@${message.author.id}>').then(ms => {

let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })

.then(col => {

  br = col.first().content

        col.first().delete()



ms.delete()



 message.channel.send('يرجى الأنتظار حتى يتم آرسال تقديمك').then(b => {

        setTimeout(() => {

  b.edit(`**تم إرسآل التقديم بنجآح ، يرجى أنتظار قبولك**\n\n<@${message.author.id}> **.**`).then(m => m.delete(10000));

        },3000);

var gg = message.guild.channels.find('name', 'adminstration')

if(!gg) return;

if(gg) {

gg.send('**سبب التقديم** : \n ${lan}\n\n**الخبرات** : \n ${md} \n\n**الأجابة على الشرط** : \n ${br} \n\n\n**مُقـدم بواسطة** :\n <@${message.author.id}>`)  

.setTimestamp()

});

}        

})

})

})

})

})

})

})

 }

})


client.login(process.env.BOT_TOKEN);
