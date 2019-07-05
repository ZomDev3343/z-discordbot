const Discord = require("discord.js");
const Command = require("./command")

module.exports = class NotifCommand extends Command
{

    static match(message)
    {
        let notifRole = msg.guild.roles.find('name', "Notif");
        if(message.content === "$notif" && !message.member.roles.has(notifRole.id))
        {
            return true;
        }
    }

    static action(message)
    {
        let notifRole = msg.guild.roles.find('name', "Notif");
        message.member.addRole(notifRole.id);
        message.member.sendMessage("Salut ! Tu viens d'accepter de recevoir les notifs du serveur Zom' !\nDe cette manière ça évite le spam pour ceux qui ne souhaitent pas recevoir les notifs.\
        \nSi jamais tu changes d'avis, tape $nonotif dans le tchat #commands.\nVoilà merci à toi et bon code :stuck_out_tongue_winking_eye:");
    }

}