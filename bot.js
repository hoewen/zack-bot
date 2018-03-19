const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("kai is")) {
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

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("lmao")) {
               message.channel.send("i lowkey wanna die??? oof")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("gay")) {
               message.channel.send("I  A M  G A Y !")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("fuck my life")) {
               message.channel.send("LMAO SAME")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("kai can")) {
               message.channel.send("i love kai lmao kms")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("fuck off")) {
               message.channel.send("wow ok")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("emo")) {
               message.channel.send("hecc im emo")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("lol")) {
               message.channel.send("PENIS!!")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("precious")) {
               message.channel.send("HHHHH KAI IS PRECIOUS")
  	}
});
         
client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("i'm hot")) {
               message.channel.send("true lol")
  	}
});
         
client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("yush")) {
               message.channel.send("stop")
  	}
});
         
client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("heh")) {
               message.channel.send("OOF")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("lmfao")) {
               message.channel.send("i fuckin hate my school tho they dont care about us and its bullshit???")
  	}
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("zack")) {
               message.channel.send("it be me)
  	}
});
         
client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("death")) {
               message.channel.send("god i wish that was me")
  	}
});
         
client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("shook")) {
               message.channel.send("*shooketh*")
  	}
});
      

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
