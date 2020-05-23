const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'no your not getting it >:(';
const log_channel = '713169439553486978';
const serverBotID = "<@711288971816337499>";
client.on("ready", () => {
    console.log("This cussing cencored is on!");
    client.channels.cache.get(log_channel).send(`This cussing cencored is on!`);
});

client.on("message", msg => {
    if (msg.channel.type === "dm" || msg.author.bot || msg.author == client.user) return; // If type is DM or IS Bot or Himself then ignore
    // Commands
    if(msg.content.includes('nigger') || msg.content.includes('Nigger')){
    msg.delete();
    var memberID = msg.member.id;
    var member = `<@${memberID}>`;
    if(msg.member.roles.cache.find(r => r.id === '713459289590595649')) {
    client.channels.cache.get(log_channel).send(`${member} said  ${msg}, msg deleted`);
    }else{
    msg.member.roles.add(['712171595048681502']).then((member) => {
    msg.channel.send(`:white_check_mark: **${member}** is successfully muted from **The boys**`);
    client.channels.cache.get(log_channel).send(`OrangeBlobby auto-muted ${member} because of: ${msg}`);
     }).catch(() => {
        
     });
}}
});

client.login(token);