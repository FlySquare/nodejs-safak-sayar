const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  bot.user.setActivity("Umut Can Arda Tarafından Geliştirilmiştir!", { type: "STREAMING", url: "https://www.twitch.tv/flysquaree" });
    console.log(` BOT: Şu an ` + bot.guilds.size + ` adet sunucuya hizmet veriliyor!`);
});

bot.on("message", (message) => {
  const startDate  = '2022-08-20';
const endDate    = '2023-02-20';
const diffInMs   = new Date(endDate) - new Date(startDate)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  if (message.content === "!şafak") {
    message.channel.send("<@993883963238125648> için atarsa: "+diffInDays+" Gün");
  }
});

bot.login('MTAwOTU5NDA5ODcwMjg4OTEwMA.GMhXI5.qcfwlUrtnvf3LJAfLe3JD8G5n-cZXy5GZqghgI');