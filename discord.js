const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";
const token = 'NzExMjg4OTcxODE2MzM3NDk5.XsA8kA.eQ2RrT-le_GXqPQPA5RKj-Rr308'; // IMPORTANT! CHANGE TOO YOUR BOT TOKEN!
const version = "1.0";
const serverBotID = "<@711288971816337499>";
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
    let meme = ["https://cdn.discordapp.com/attachments/711288252627419176/711302523922939904/image0.jpg", "https://cdn.discordapp.com/attachments/711288252627419176/711302524187181076/image1.jpg", "https://cdn.discordapp.com/attachments/711288252627419176/711302524547760159/image2.png", "https://cdn.discordapp.com/attachments/711288252627419176/711302524849881219/image3.jpg"];

    // Commands
if(cmd == 'dog'){ //sends dog pictures
    msg.channel.send("", {files: [dogs[Math.floor( Math.random() * dogs.length )]]});
}else if(cmd == 'cat'){
  msg.channel.send("", {files: [cats[Math.floor( Math.random() * cats.length )]]});
}else if(cmd == 'meme'){
  msg.channel.send("", {files: [meme[Math.floor( Math.random() * meme.length )]]});
}else{
  msg.channel.send("wrong command IDIOT");
}
});

client.login(token);