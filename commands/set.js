  
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let botmessage = args.join(" ");
        let sayEmbed = new Discord.MessageEmbed()
        .setFooter('TicketEM', 'https://cdn.discordapp.com/attachments/779384275354386442/779387002042187806/wSTFkRM.png')
        .setColor(bot.config.color)
        .setTimestamp()
        .addField(`TicketEM`, "Type `em!new <reason>` to create a ticket!")
        .setThumbnail("https://cdn.discordapp.com/attachments/779384275354386442/779387140453957672/mark-v1.png");
        message.channel.send(sayEmbed);{
        }
        }

module.exports.help = {
    name: "set"
}