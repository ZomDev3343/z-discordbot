const Command = require("./command")

module.exports = class ClearCommand extends Command
{

    static match(message)
    {
        let notifRole = message.guild.roles.find('name', "Admin");
        if(message.content.startsWith("$clear") && message.member.roles.has(notifRole.id))
        {
            return true;
        }
    }

    static action(message)
    {
        let args = message.content.split(" ");
        args.shift();

        if(message.content === "$clear")
        {
            message.channel.bulkDelete(100);
        }else
        {
            let xDeletes = parseInt(args[0], 10);
            if(xDeletes > 100)
            {
                xDeletes = 100;
            }

            message.delete();
            message.channel.bulkDelete(xDeletes);
        }

    }

}