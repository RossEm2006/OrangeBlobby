const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";
const token = 'xD'; 
const version = "2.2";
const log_channel = '713169439553486978';
const serverBotID = "<@711288971816337499>";
const fs = require('fs'); // put this at the top of the file
client.on("ready", () => {
    console.log("This bot is online!");
    client.user.setActivity(prefix, { type: "LISTENING" });
    
});

client.on("message", msg => {
    if (msg.channel.type === "dm" || msg.author.bot || msg.author == client.user) return; // If type is DM or IS Bot or Himself then ignore
    if (!msg.content.startsWith(prefix))return;  // If message dosen't contain prefix then ignore
    let args = msg.content.slice(prefix.length).trim().split(/ +/g); // Removes prefix from message
    let cmd = args.shift().toLowerCase(); // Make the command lowercase
    const author = msg.author.toString();// authors ping
    const rest = args.join(' ')//command without prefix
    let dogs = ["https://cdn.discordapp.com/attachments/711288252627419176/711298132910145706/image0.jpg", "https://cdn.discordapp.com/attachments/711288252627419176/711298133300346990/image1.jpg", "https://cdn.discordapp.com/attachments/711288252627419176/711298133799206972/image2.jpg"];
    let cats = ["https://cdn.discordapp.com/attachments/711288252627419176/711301879790829578/image0.jpg", "https://cdn.discordapp.com/attachments/711288252627419176/711301880134893568/image1.jpg", "https://cdn.discordapp.com/attachments/711288252627419176/711301880621301820/image2.jpg"];
    // Commands
    if (cmd === 'addMeme'){
      if(msg.member.roles.cache.find(r => r.id === '713135051969396736')){
      let json = require('./meme.json') // require the most recent jokes
      usersJoke = args.join(' ') // concatinate the all the args into one sentence
      json.test.push( userJoke ) // add users joke to the array
      fs.writeFileSync('./meme.json', JSON.stringify(json)); // write the new json file
    }}
if(cmd == 'fiverr'){
  if(args[0] == 'bot'){
    msg.channel.send('https://www.fiverr.com/share/2peVyV');
  }else if(args[0] == 'server')
  msg.channel.send('https://www.fiverr.com/share/WeQAvl')
}
if(cmd == 'dog'){ //sends dog pictures
    msg.channel.send("", {files: [dogs[Math.floor( Math.random() * dogs.length )]]});
}
if(cmd == 'cat'){// sends cat pictures
  msg.channel.send("", {files: [cats[Math.floor( Math.random() * cats.length )]]});
}
if (cmd == 'meme'){ //sends meme pictures
  let {meme} = require('./meme.json')
  msg.channel.send("", {files: [meme[Math.floor( Math.random() * meme.length )]]});
}
// if(cmd == 'test'){
//   msg.channel.send("", {files: [test[Math.floor( Math.random() * test.length )]]});
// }
if(cmd == 'are'){// meme command
  if(args[0] == 'you'){
    if(args[1] == 'men?'){
      msg.channel.send('yes');
}}}
if(cmd == 'kick'){// if the command is kick
  if(msg.member.roles.cache.find(r => r.id === '713459289590595649')) {//check if the author has the @moderation tools
    var member= msg.mentions.members.first();// set the member that is needed to be kicked
    if(!args[0] == ''){//check if the first argument is blank
    let context = msg.content.slice(24).trim().split(/ +/g);// set context on the rest of the command
    member.kick().then((member) => {//if kicking the member was succesfull
    msg.channel.send(`:white_check_mark: **${member.displayName}** has successfully been kicked from **The boys**`);//send this msg
    client.channels.cache.get(log_channel).send(`@here, ${author} kicked ${member} with the context of: ${context}`);//send the log to log channel.
    }).catch(() => {//if there was an error kicking
      msg.channel.send("You can't kick that member!");//send this error message
    });
}else{//if the 1st argument was blank
  msg.channel.send('Thats the wrong format, use *kick @member');// send this command
}}else{//if the author does not have the role
  msg.reply("You don't have permission to kick people!");//send this msg
}}//command created by @chicken nugget#9885

if(cmd == 'ban'){
  if(msg.member.roles.cache.find(r => r.id === '713459289590595649')) {
    var member= msg.mentions.members.first();
    if(!args[0] == ''){
      let context = msg.content.slice(24).trim().split(/ +/g);
      if(member == undefined){
        msg.channel.send('please provide a valid user');
      }else{
    member.ban().then((member) => {
    msg.channel.send(`:white_check_mark: **${member.displayName}** has successfully been banned from **The boys**`);
    client.channels.cache.get(log_channel).send(`@here, ${author} banned ${member} with the context of: ${context}`);
    }).catch(() => {
      msg.channel.send("You can't ban that member!");
    });
}}else{
  msg.channel.send('Thats the wrong format, use *ban @member');
}}else{
  msg.reply("You don't have permission to ban people!");
}}
if(cmd == 'unban'){
  if(msg.member.roles.cache.find(r => r.id === '713459289590595649')) {
    var member= rest;
    let context = msg.content.slice(24).trim().split(/ +/g);
    if(!args[0] == ''){
    msg.guild.members.unban(args[0]).then((member) => {
    msg.channel.send(`:white_check_mark: **${member}** has successfully been unbanned from **The boys**`);
    client.channels.cache.get(log_channel).send(`@here, ${author} unbanned userID ${rest}, with the context of: ${context}`);
    }).catch(() => {
       msg.channel.send("hmm that didnt work, is it the right id? Is the person actually banned? use UserID instead of username");   
    });
}else{
  msg.channel.send('Thats the wrong format, use *unban @member');
}}else{
  msg.reply("You don't have permission to unban people!");
}}
if(cmd == 'mute'){
  if(msg.member.roles.cache.find(r => r.id === '713459289590595649')) {
    if(!args[0] == ''){
  let member = msg.mentions.members.first();
  let context = msg.content.slice(24).trim().split(/ +/g);
  if(member == undefined){
    msg.channel.send('please provide a valid user');
  }else{
    member.roles.add(['712171595048681502']).then((member) => {
    msg.channel.send(`:white_check_mark: **${member}** is successfully muted from **The boys**`);
    client.channels.cache.get(log_channel).send(`@here, ${author} muted ${member} with the context of: ${context}`);
    }).catch(() => {
       msg.channel.send("User not found or invalid");   
    });
}}else{
  msg.channel.send('wrong usage! use: *mute @user');
}}else{
  msg.channel.send('HEY! you are now allowed to do that!');
}}
if(cmd == 'unmute'){
  if(msg.member.roles.cache.find(r => r.id === '713459289590595649')) {
    if(!args[0] == ''){
  let member = msg.mentions.members.first();
  let context = msg.content.slice(24).trim().split(/ +/g);
  if(member == undefined){
    msg.channel.send('please provide a valid user');
  }else{
    member.roles.remove(['712171595048681502']).then((member) => {
    msg.channel.send(`:white_check_mark: **${member}** is successfully unmuted from **The boys**`);
    client.channels.cache.get(log_channel).send(`@here, ${author} unmuted ${member} with the context of: ${context}`);
    }).catch(() => {
       msg.channel.send("hmm, that didnt work. Is the user muted?");   
    });
}}else{
  msg.channel.send('wrong usage! use: *unmute @user');
}}else{
  msg.channel.send('You are not allowed to unmute!')
}}
});

client.login(token);