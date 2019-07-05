const Discord = require("discord.js")
const Command = require('./command')

module.exports = class HelpCommand extends Command
{

    static match(message)
    {
        if(message.content === "$help" && message.channel.type === "text")
        {
            return true;
        }
    }

    static action(message)
    {
        message.author.createDM();
        let help = new Discord.RichEmbed()
        .setTitle("$HELP")
        .setDescription("Renvoie les commandes disponibles sur le serveur !")
        .addBlankField()
        .addField("$notif", "Vous donne le rôle @Notif ce qui vous permet de recevoir les notifs dans #annonces !")
        .addField("$nonotif", "Vous retire le rôle @Notif, vous ne recevrez plus de notifs dans #annonces !")
        .addField("$subscribe", "Vous permet de vous abonner à la chaîne YouTube ( ce qui est quand même vachement bien :stuck_out_tongue: )")
        .addBlankField();
        message.author.send(help);
    }

}