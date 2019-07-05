const Discord = require("discord.js");
const Client = new Discord.Client();


// Commands

const Notif = require("./commands/notif")
const NoNotif = require("./commands/nonotif")
const Clear = require("./commands/clear")

Client.on('ready', () =>
{
    Client.user.setActivity("Commandes $help");
});

Client.on('message', msg =>
{
    if(msg.channel.name === "commandstest")
    {
        Notif.parse(msg);
        NoNotif.parse(msg);
        Clear.parse(msg);
    }
})

Client.login(process.env.TOKEN);