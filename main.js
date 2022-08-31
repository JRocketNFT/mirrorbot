/* Author: https://www.fiverr.com/xwxct_ */
const discord = require('discord.js-selfbot');
const { WebhookClient } = require('discord.js');
const bot = require(`${__dirname}/config/Bot.json`);

async function check_channels() {
    delete require.cache[require.resolve(`${__dirname}/config/Bot.json`)];
    return require(`${__dirname}/config/Bot.json`);
}
async function check_message(msg, type_) {
    const data = {};
    
    if (type_) {
        data['username'] = String(msg.author.username).substring(0, 30);
        data['avatarURL'] = msg.author.displayAvatarURL({ dynamic: false, format: 'jpg' });
    }

    if (msg.content) data['content'] = String(msg.content).substring(0, 1950);
    if (msg.embeds.length) data['embeds'] = msg.embeds;
    if (msg.attachments.size) {
        const send_list = [];
        msg.attachments.forEach(file => {
            send_list.push(file.url);
        });
        data['files'] = send_list;
    }

    return data;
}
async function check_data(msg) {
    if (msg.content) return true;
    if (msg.embeds.length) return true;
    if (msg.attachments.size) return true;
    return false;
}
async function webhook(url, data) {
    try {
        const hook = new WebhookClient({ url: url });
        await hook.send(data);
        hook.destroy();
    } catch (error) {
        console.error(`  [ WEBHOOK ] Error: ${error.message}`);
    }
}

/* BOT - DISCORD */
const client = new discord.Client({
    messageCacheMaxSize: 400,
    messageCacheLifetime: 300,
    messageSweepInterval: 200,
    retryLimit: 2
});

client.once('ready', () => {
    console.log(`  [ DISCORD ] Logged in as ${client.user.tag}!`);
    const d = new Date();
    console.log(`  [ DATE ] ${d.toString()}`);
});

client.on('message', async (m) => {
	const data = await check_data(m);
	if (!data) return;
	if (!m.channel) return;
    if (!m.channel.guild) return;

    const chn = await check_channels();
    if (Object.keys(chn.channels).includes(m.channel.id)) {
        if (String(chn.channels[m.channel.id]).startsWith('https://discord.com/api/webhooks/')) {
            const msg = await check_message(m, chn.info);
            await webhook(chn.channels[m.channel.id], msg);
        }
    }
});

client.login(bot.token);

/* Author: https://www.fiverr.com/xwxct_ */