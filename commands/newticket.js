const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.deletable) message.delete();

    const reason = message.content.split(" ").slice(1).join(" ")

    let SupportCategoty = message.guild.channels.cache.find(category => category.name === bot.config.ticketCategory)

    if(!message.guild.roles.cache.find(role => role.name === bot.config.seeTicket)) return message.channel.send("`I Can't find the Support Team role.`")

    let supportrole = message.guild.roles.cache.find(role => role.name === bot.config.seeTicket)

    if(!reason) return message.channel.send("`Please provide a reason`")
    const channelName = `ticket-${message.author.username}`
    if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.tag}`.toLowerCase)) return message.channel.send("`You already have a ticket open!`")

    message.guild.channels.create(channelName, { parent: SupportCategoty.id, topic: `Ticket Creator: ${message.author.id}`}).then(c => {
        const everyone = message.guild.roles.cache.find(role => role.name === "@everyone")
        c.updateOverwrite(supportrole, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        })
        c.updateOverwrite(everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
        })
        c.updateOverwrite(message.author, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
        })

        let EmbedTicket = new Discord.MessageEmbed()
        .setColor(bot.config.color)
        .setDescription(`__**Ticket**__\n\n${message.author.tag} has created a Ticket. Please wait for Support to respond in this channel\n\n**Reason:** ${reason}`)
        .setFooter('TicketEM', 'https://cdn.discordapp.com/attachments/779384275354386442/779387002042187806/wSTFkRM.png')
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/779384275354386442/779387140453957672/mark-v1.png")
        c.send(EmbedTicket)
    })
};

module.exports.help = {
    name: "new"
}