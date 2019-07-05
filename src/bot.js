const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on('ready', () =>
{
    
});

Client.on('message', msg =>
{
    if(msg.channel.name === "commandstest")
    {
        let notifRole = msg.guild.roles.find('name', "Notif");
        if(msg.content === "$notif" && !msg.member.roles.has(notifRole.id))
        {
            msg.member.addRole(notifRole.id);
            msg.member.sendMessage("Salut ! Tu viens d'accepter de recevoir les notifs du serveur Zom' !\nDe cette manière ça évite le spam pour ceux qui ne souhaitent pas recevoir les notifs.\
            \nSi jamais tu changes d'avis, tape $nonotif dans le tchat #commands.\nVoilà merci à toi et bon code :stuck_out_tongue_winking_eye:");
        }else if(msg.content === "$nonotif" && msg.member.roles.has(notifRole.id))
        {
            msg.member.removeRole(notifRole.id);
            msg.member.sendMessage("Salut ! Tu viens de perdre le rôle pour les notifs.\nSi jamais tu veux le récupérer fais la commande $notif.\n\
            \nVoilà bon code à toi ! :innocent:")
        }
    }
})

Client.login(process.env.TOKEN);