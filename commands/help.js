  
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();
if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let botmessage = args.join(" ");
        let sayEmbed = new Discord.MessageEmbed()
        .setFooter('TicketEM', 'https://cdn.discordapp.com/attachments/779384275354386442/779387002042187806/wSTFkRM.png')
        .setColor(bot.config.color)
        .setTimestamp()
        .setTitle("TicketEM Support")
        .setURL('https://discord.gg/wsxZuxbBEk')
        .setDescription(`[Invite](https://discord.com/api/oauth2/authorize?client_id=779386051659038752&permissions=8&scope=bot)`)
        .addField(`em!setup`, "Steps to setup the Tickets")
        .addField(`em!set`, "Sets the ticket channel")
        .addField(`em!new`, "Creates a new Ticket")
        .addField(`em!rename`, "Renames the ticket")
        .addField(`em!close`, "Closes the ticket")
        .setThumbnail("https://cdn.discordapp.com/attachments/779384275354386442/779387140453957672/mark-v1.png");
        message.channel.send(sayEmbed);{
        }
        }

module.exports.help = {
    name: "help"
}