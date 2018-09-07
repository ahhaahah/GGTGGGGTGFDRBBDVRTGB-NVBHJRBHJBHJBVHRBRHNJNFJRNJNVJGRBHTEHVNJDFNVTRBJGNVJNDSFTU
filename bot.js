const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` !help `,"https://www.twitch.tv/NICKMERCS")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**❌ ليس لديك رتبة ادمن **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**🚫  MANAGE_MESSAGES ليس لديك رتبة ادمن او بريم 🚫 **');
          var msg;
          msg = parseInt(); ///KillerFox AlphaCodes
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error); ///KillerFox AlphaCodes
        message.channel.sendMessage("", {embed: { ///KillerFox AlphaCodes
          title: "** ➡ تــم مسح الشات ⬅ **",
          color: 0x06DF00,
          footer: { ///KillerFox AlphaCodes
            
          }
        }}).then(msg => {msg.delete(10000)});
                            }
  
       
  });

client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "【Creators】";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });



client.on('message', msg => {

  if (msg.content === '!help') {

    msg.reply('!bc و اكتب الرسالة');

  }

});




client.on('message', message =>{
    if(message.content === '!ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});











client.on('message', async message => {
    let date = moment().format('Do MMMM YYYY , hh:mm');
    let User = message.mentions.users.first();
    let Reason = message.content.split(" ").slice(3).join(" ");
    let messageArray = message.content.split(" ");
    let time = messageArray[2];
    if(message.content.startsWith("-tempban")) {
       if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**لاتمتلك صلاحيات**");
       if(!User) message.channel.send("**منشن شخص**");
       if(User.id === client.user.id) return message.channel.send("**لاتستطيع حظري**");
       if(User.id === message.guild.owner.id) return message.channel.send("**لا استطيع ان احظر الادارة**");
       if(!time) return message.channel.send("**ضع الوقت الذي تريده**");
       if(!time.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('**ضع وقت حقيقي**');
       if(!Reason) message.channel.send("**ضع سبب**");
       let banEmbed = new Discord.RichEmbed()
       .setAuthor(`You have been banned from ${message.guild.name} !`)
       .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
       .addField('- تم حظره من قبل: ',message.author.tag,true)
       .addField('- السبب:',Reason,true)
       .addField('- الوقت الذي تبند فيه:',date,true)
       .addField('- وقت الحظر:',time,true)
       .setFooter(message.author.tag,message.author.avatarURL);
       User.sendMessage({embed: banEmbed}).then(() => message.guild.member(User).ban({reason: Reason}))
       .then(() => message.channel.send(`**:white_check_mark: ${User} banned from the server ! :airplane: **`)).then(() => { setTimeout(() => {
           message.guild.unban(User);
       }, message(time));
    });
   }
  
});

client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', 'اسم الروم الي بيرحب فيه');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField(':running_shirt_with_sash: | name :  ',${member})
            .addField(':loudspeaker: | نورت السيرفر يا قلبي' , Welcome to the server, ${member})
            .addField(':id: | user :', "[" + ${member.id} + "]" )
                    .addField(':arrow_right:| انت العضو رقم',${member.guild.memberCount})

                      .addField("Name:",<@ + ${member.id} + >, true)

                                         .addField(' الـسيرفر', ${member.guild.name},true)

         .setFooter(${member.guild.name})
            .setTimestamp()

          channel.sendEmbed(embed);
        });

        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(الله معاك ✋:skin-tone-1: 😔)
            .setDescription(مع السلامه تشرفنا بك ✋:skin-tone-1: 😔)
            .addField(':bust_in_silhouette:   تبقي',**[ ${member.guild.memberCount} ]**,true)
            .setColor('RED')
            .setFooter(==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png%27)

        var channel =member.guild.channels.find('name', 'اسم الروم الي يقول فيه اذا حد غادر')
        if (!channel) return;
        channel.send({embed : embed});
        })





client.login(process.env.BOT_TOKEN)

