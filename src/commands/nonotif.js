const Discord = require("discord.js");
const Command = require("./command")

module.exports = class NoNotifCommand extends Command
{

    static match(message)
    {
        let notifRole = message.guild.roles.find('name', "Notif");
        if(message.content === "$nonotif" && message.member.roles.has(notifRole.id))
        {
            return true;
        }
    }

    static action(message)
    {
        let notifRole = message.guild.roles.find('name', "Notif");
        message.member.removeRole(notifRole.id);
        message.member.sendMessage("Salut ! Tu viens de perdre le rôle pour les notifs.\nSi jamais tu veux le récupérer fais la commande $notif.\n\
        \nVoilà bon code à toi ! :innocent:")
        message.delete();
    }

}