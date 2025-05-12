let handler = async (m, { conn, args, usedPrefix }) => {
    let isOwner = m.sender == "15818129350@s.whatsapp.net"; // Sostituisci con il tuo numero di WhatsApp
    if (!isOwner) return m.reply("❌ Solo l'owner può usare questo comando!");
  
    let mentionedUser = m.mentionedJid && m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : null;
    let amount = parseInt(args[1]);
  
    if (!mentionedUser) return m.reply(`⚠ *Menziona un utente!* \n\n📌 *Esempio:* ${usedPrefix}addstars @utente 100`);
    if (!amount || isNaN(amount) || amount <= 0) return m.reply("❌ Devi specificare un numero valido di stelline!");
  
    let user = global.db.data.users[mentionedUser] || { stars: 0, money: 0 };
    user.stars = (user.stars || 0) + amount;
    user.money = (user.money || 0) + amount; // Trasferisce le Unitycoins al saldo del portafoglio
  
    let addedUser = await conn.getName(mentionedUser);
    let senderName = await conn.getName(m.sender);
  
    let message = `
✨ 𝗦𝗧𝗘𝗟𝗟𝗜𝗡𝗘 𝗔𝗗𝗗 ✨

👤 Utente: @${mentionedUser.split("@")[0]}
➕ Aggiunte: ${amount} 💶
🔹 Totale Unitycoins: ${user.stars} 💶
💰 Saldo Portafoglio: ${user.money} 💶

👑 Aggiunto da: @${m.sender.split("@")[0]}
    `;
  
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser, m.sender] }, { quoted: m });
};
  
handler.command = /^(addstars|aggiungiUnitycoins)$/i;
handler.owner = true; // Solo l'owner può usarlo
export default handler;