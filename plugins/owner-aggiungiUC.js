let handler = async (m, { conn, args, isOwner }) => {
    if (!isOwner) return m.reply('🚩 Questo comando è riservato agli owner.');

    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
    let amount = parseInt(args[0]);

    if (!amount || isNaN(amount) || amount < 1) {
        return m.reply('🚩 Inserisci un numero valido di *💶 UnityCoins* da aggiungere.');
    }

    // Verifica se l'utente è presente nel database
    if (!(who in global.db.data.users)) {
        return m.reply(`🚩 L'utente non è presente nel database.`);
    }

    let user = global.db.data.users[who];

    // Aggiungi le UnityCoins al portafoglio
    user.limit += amount;

    await m.reply(
        `${who == m.sender 
            ? `✅ Hai aggiunto *${amount} 💶 UnityCoins* al tuo portafoglio.` 
            : `✅ Hai aggiunto *${amount} 💶 UnityCoins* al portafoglio di @${who.split('@')[0]}.`}`,
        null,
        { mentions: [who] }
    );
};

handler.help = ['addstars <numero> [@utente]'];
handler.tags = ['owner', 'rpg'];
handler.command = ['adduc', 'addunitycoins', 'addUnityCoins'];
handler.owner = true; 

export default handler;