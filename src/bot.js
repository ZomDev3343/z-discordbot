const Discord = require("discord.js");
const Client = new Discord.Client();


// Commands

const Notif = require("./commands/notif");
const NoNotif = require("./commands/nonotif");
const Clear = require("./commands/clear");
const Help = require("./commands/help")
const Subscribe = require('./commands/subscribe')
const YoutubeNotif = require('./commands/ytnotif')

Client.on('ready', () =>
{
    Client.user.setActivity("Commandes $help #commands");
});

Client.on('message', msg =>
{
    if(msg.channel.name === "commands" || msg.channel.name === "commandstest")
    {
        Notif.parse(msg);
        NoNotif.parse(msg);
        Clear.parse(msg);
        Help.parse(msg);
        Subscribe.parse(msg);
        YoutubeNotif.parse(msg);
    }
})

Client.login(process.env.TOKEN);