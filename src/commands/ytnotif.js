const Discord = require('discord.js');
const Command = require('./command');

module.exports = class YoutubeNotif extends Command
{

    static match(message)
    {
        if(message.content.startsWith("$$ytnotif$$"))
        {
            return true;
        }
    }

    static action(message)
    {
        let role = message.guild.roles.find("name", "Notif");
        let msg = message.content.replace("$$ytnotif$$", role);
        message.guild.channels.find("name", "annonces").send(msg);
        //message.channel.send(msg);
    }

}