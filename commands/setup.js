  
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Invalid permissions.").then(msg => msg.delete(10000));
    let botmessage = args.join(" ");
        let sayEmbed = new Discord.MessageEmbed()
        .setFooter('TicketEM', 'https://cdn.discordapp.com/attachments/779384275354386442/779387002042187806/wSTFkRM.png')
        .setColor(bot.config.color)
        .setTimestamp()
        .addField(`First Step`, "Make a role called `Support Team`")
        .addField(`Second Step`, "Make a Catagory Called `Tickets` to store all them")
        .addField(`Third Step`, "Now go to your ticket channel and type `em!set`")
        .setThumbnail("https://cdn.discordapp.com/attachments/779384275354386442/779387140453957672/mark-v1.png");
        message.channel.send(sayEmbed);{
        }
        }

module.exports.help = {
    name: "setup"
}