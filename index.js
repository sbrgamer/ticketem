const Discord = require("discord.js");
const fs = require("fs")
const yaml = require("js-yaml")

const bot = new Discord.Client({disableEveryone: true})

function loadFile(file){
    return myFile = yaml.safeLoad(fs.readFileSync(`${file}`, 'utf8'))
  }
  
  bot.config = loadFile(`./configs/config.yml`)

  bot.commands = new Discord.Collection();
  
  fs.readdir(`./commands/`, (err, files) => {

    if(err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) return console.log("There are no commands to load");

    console.log(`Loading ${jsfiles.length} commands...`);
    console.log(`Ticket is in ${bot.guilds.cache.size} servers`);
    jsfiles.forEach((f, i)  => {
        let props = require(`./commands/${f}`);
        console.log(`${i + i}: ${f} loaded!`)
        bot.commands.set(props.help.name, props)
        
    })

 
    
    bot.on("message", async message => {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return; 
    
        let prefix = bot.config.prefix;
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
    
        if (!command.startsWith(prefix)) return;
    
        let cmd = bot.commands.get(command.slice(prefix.length));
        if (cmd) cmd.run(bot, message, args);
            

        welcome(bot)

        })
      })

    bot.login(bot.config.token);
