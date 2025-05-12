import { performance } from 'perf_hooks';
import fetch from 'node-fetch'; // Assicurati di avere node-fetch installato

const handler = async (message, { conn, usedPrefix }) => {
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';
    const chat = global.db.data.chats[message.chat];

    const functions = {
        "Detect": chat.detect,
        "GPT": chat.gpt,
        "JadiBot": chat.jadibot,
        "Benvenuto": chat.welcome,
        "Solo Gruppo": chat.sologruppo,
        "Solo Privato": chat.soloprivato,
        "Modo Admin": chat.modoadmin,
        "Ban Gruppo": chat.isBanned,
        "Antiporno": chat.antiPorno,
        "AntiCall": chat.antiCall,
        "Antitraba": chat.antitraba,
        "AntiPakistani": chat.antiArab,
        "Antilink": chat.antiLink,
        "AntiInstagram": chat.antiinsta,
        "AntiTikTok": chat.antitiktok,
        "Bestemmiometro": chat.bestemmiometro,
    };

    let statusList = Object.entries(functions)
        .map(([name, state]) => `${state ? '🟢' : '🔴'} - *${name}*`)
        .join('\n');

    const menuText = `
╭〔 *💬 𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻 💬* 〕┈⊷
┃◈╭───────────·๏
┃◈┃• *𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑮𝑬𝑵𝑬𝑹𝑨𝑳𝑰*
┃◈┃
┃◈┃• 👑 *${usedPrefix}creatore*
┃◈┃• 📥 *${usedPrefix}installa*
┃◈┃• 📜 *${usedPrefix}infobot*
┃◈┃• ❓ *${usedPrefix}FAQ*
┃◈┃• 🚀 *${usedPrefix}ping*
┃◈┃ 
┃◈╭─────────────·๏
┃◈┃• *𝐀𝐓𝐓𝐈𝐕𝐀/𝐃𝐈𝐒𝐀𝐁𝐈𝐋𝐈𝐓𝐀*
┃◈┃
${statusList.split('\n').map(line => `┃◈┃• ${line}`).join('\n')}
┃◈┃
┃◈┃• *ℹ 𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀*
┃◈┃• *🟢 attiva [funzione]*
┃◈┃• *🔴 disattiva [funzione]*
┃◈┃
┃◈└───────────┈⊷
┃◈┃• *𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑨𝑫𝑴𝑰𝑵 👑*  
┃◈┃  
┃◈┃• 👑 *promuovi /mettiadmin*  
┃◈┃• 👑 *retrocedi /togliadmin*  
┃◈┃• 👑 *warn / unwarn*  
┃◈┃• 👑 *muta / smuta*  
┃◈┃• 👑 *freeze <tempo>*  
┃◈┃• 👑 *kick / cacca*  
┃◈┃• 👑 *hidetag*  
┃◈┃• 👑 *tagall*  
┃◈┃• 👑 *aperto / chiuso*  
┃◈┃• 👑 *setwelcome*  
┃◈┃• 👑 *setbye*  
┃◈┃• 👑 *inattivi*  
┃◈┃• 👑 *regole/setregole*  
┃◈┃• 👑 *ds*  
┃◈┃• *𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬:* ESSENTIAL
┃◈┃•  𝐂𝐎𝐋𝐋𝐀𝐁: 𝐉𝐉𝐊
╰━━━━━━━━━━━━━┈·๏
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲
*•────────────•⟢*
`.trim();

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: `${botName}`
            },
        }
    };

    const imagePath = './menu/chatunitybot.jpeg';
    await conn.sendMessage(message.chat, { image: { url: imagePath }, caption: menuText, ...messageOptions }, { quoted: message });
};

async function fetchThumbnail(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
    } catch (error) {
        console.error('Errore durante il fetch della thumbnail:', error);
        return 'default-thumbnail'; // Fallback thumbnail in caso di errore
    }
}

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount) {
    return `

╭〔 *💬 𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻 💬* 〕┈⊷
┃◈╭───────────·๏
┃◈┃• *𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑮𝑬𝑵𝑬𝑹𝑨𝑳𝑰*
┃◈┃
┃◈┃• 👑 *${prefix}creatore*
┃◈┃• 📥 *${prefix}installa*
┃◈┃• 📜 *${prefix}infobot*
┃◈┃• 📖 *${prefix}guida*
┃◈┃• ❓ *${prefix}FAQ*
┃◈┃• 🚀 *${prefix}ping*
┃◈┃ 
┃◈┃• *𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑨𝑫𝑴𝑰𝑵 👑*  
┃◈┃  
┃◈┃• 👑 *promuovi /mettiadmin*  
┃◈┃• 👑 *retrocedi /togliadmin*  
┃◈┃• 👑 *warn / unwarn*  
┃◈┃• 👑 *muta / smuta*  
┃◈┃• 👑 *freeze <tempo>*  
┃◈┃• 👑 *kick / cacca*  
┃◈┃• 👑 *hidetag*  
┃◈┃• 👑 *tagall*  
┃◈┃• 👑 *aperto / chiuso*  
┃◈┃• 👑 *setwelcome*  
┃◈┃• 👑 *setbye*  
┃◈┃• 👑 *inattivi*  
┃◈┃• 👑 *regole/setregole*  
┃◈┃• 👑 *ds*  
┃◈┃
┃◈└───────────┈⊷
┃◈┃• *𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬:* ESSENTIAL
┃◈┃•  𝐂𝐎𝐋𝐋𝐀𝐁: 𝐉𝐉𝐊
┃◈┃• *𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎:* (.supporto)
╰━━━━━━━━━━━━━┈·๏
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲
*•────────────•⟢*
`.trim();
}
