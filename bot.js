const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("kai")) {
               message.channel.send("EXCUSE ME I LOVE KAI")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("owen")) {
               message.channel.send("hoewennnn")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("zacwen")) {
               message.channel.send("is real ;)")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("ur mom gay")) {
               message.channel.send("no u")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("memes")) {
               message.channel.send("succ")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("i wanna die")) {
               message.channel.send("me too lmao")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("fuck me daddy")) {
               message.channel.send("oH")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("XD")) {
               message.channel.send("rawr xD")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("mcr")) {
               message.channel.send("fuck yeah")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("owo")) {
               message.channel.send("OwO what's this?")
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
