const Discord = require("discord.js")
const Command = require("./command")

module.exports = class SubscribeCommand extends Command
{

    static match(message)
    {
        if(message.content === "$subscribe" && message.channel.type === "text")
        {
            return true;
        }
    }

    static action(message)
    {
        message.author.createDM();
        message.author.send("Abonne-toi en cliquant sur le lien, c'est gratuit ;)\nhttps://www.youtube.com/channel/UCdjw-3EI4xgOe341MJEiYmg?view_as=subscriber?sub_confirmation=1")
    }

}