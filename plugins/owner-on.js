
let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
    let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    let bot = global.db.data.settings[conn.user.jid] || {};
    if (ps == '') return;
    const delay = time => new Promise(res => setTimeout(res, time));

    switch (command) {
        case "nukebychiara":  
            if (!bot.restrict) return;
            if (!isBotAdmin) return;

            await
conn.sendMessage(m.chat, { text: "𝑷𝒆𝒏𝒔𝒊 𝒄𝒉𝒆 𝒔𝒊𝒂𝒏𝒐 𝒈𝒍𝒊 𝒖𝒏𝒊𝒄𝒊 𝒄𝒉𝒆 𝒄𝒐𝒏𝒕𝒂𝒏𝒐. 𝑷𝒆𝒏𝒔𝒂𝒏𝒐 𝒅𝒊 𝒑𝒐𝒕𝒆𝒓 𝒆𝒗𝒊𝒕𝒂𝒓𝒆 𝒍𝒂 𝒎𝒐𝒓𝒕𝒆, 𝒎𝒂 𝒒𝒖𝒆𝒍𝒍𝒂 𝒑𝒂𝒄𝒆 è 𝒖𝒏\'𝒂𝒔𝒔𝒖𝒓𝒅𝒊𝒕à 𝒔𝒆𝒏𝒛𝒂 𝒔𝒆𝒏𝒔𝒐. 𝑺𝒆 𝒖𝒄𝒄𝒊𝒅𝒊 𝒒𝒖𝒂𝒍𝒄𝒖𝒏𝒐, 𝒒𝒖𝒂𝒍𝒄𝒖𝒏 𝒂𝒍𝒕𝒓𝒐 𝒗𝒆𝒓𝒓à 𝒑𝒆𝒓 𝒖𝒄𝒄𝒊𝒅𝒆𝒓𝒕𝒊. 𝑸𝒖𝒆𝒔𝒕𝒐 è 𝒍\'𝒐𝒅𝒊𝒐 𝒄𝒉𝒆 𝒄𝒊 𝒖𝒏𝒊𝒔𝒄𝒆. 𝑽𝒐𝒈𝒍𝒊𝒐 𝒄𝒉𝒆 𝒕𝒖 𝒔𝒆𝒏𝒕𝒂 𝒊𝒍 𝒅𝒐𝒍𝒐𝒓𝒆, 𝒑𝒆𝒏𝒔𝒂𝒓𝒆 𝒂𝒍 𝒅𝒐𝒍𝒐𝒓𝒆, 𝒄𝒐𝒏𝒐𝒔𝒄𝒆𝒓𝒆 𝒊𝒍 𝒅𝒐𝒍𝒐𝒓𝒆. 𝑪𝒉𝒊 𝒏𝒐𝒏 𝒄𝒐𝒏𝒐𝒔𝒄𝒆 𝒊𝒍 𝒗𝒆𝒓𝒐 𝒅𝒐𝒍𝒐𝒓𝒆 𝒏𝒐𝒏 𝒄𝒐𝒏𝒐𝒔𝒄𝒆𝒓à 𝒎𝒂𝒊 𝒍𝒂 𝒗𝒆𝒓𝒂 𝒑𝒂𝒄𝒆! " });
            await conn.sendMessage(m.chat, { text: 'ENTRATE TUTTI QUA:\nhttps://chat.whatsapp.com/FznAHaaFel2E7ZnQxXku94' });

            let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
            let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);   

            if (isBotAdmin && bot.restrict) { 
                await delay(1);
                let responseb = await conn.groupParticipantsUpdate(m.chat, users, 'remove');
                if (responseb[0].status === "404") 
                    await delay(1);
            } else return;
            break;           
    }
};

handler.command = /^(nukebychiara)$/i;
handler.group = true;
handler.owner = true;
handler.fail = null;
export default handler;
