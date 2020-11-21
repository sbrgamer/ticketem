const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send("`Ticket Error: Not a Ticket Channel.`").then(msg => msg.delete({ timeout: 5000}))

    message.channel.delete()

};

module.exports.help = {
    name: "close"
}
