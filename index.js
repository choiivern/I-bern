const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 32767 });

client.once('ready', () => {
  console.log("봇이 준비되었습니다");
});

client.on('messageCreate' , message=>{
    if(message.content == "아이번 쓰레기") {
        message.reply("응 니얼굴.")
    }
});

client.on('messageCreate' , message=>{
    if(message.content == "아이번 최고~") {
        message.reply("하하! 고맙네 친구.")
    }
});

client.on('messageCreate' , message=>{
    if(message.content == "이번엔 잘 되겠지?") {
        message.reply("물론이지. 데이지가 도와줄걸세.")
    }
});

client.login('OTA3NTkwMzEyNzcwMjkzNzgw.YYpZWA.4IeMELqVfxrdCUHkCoF_5XYQGuw');