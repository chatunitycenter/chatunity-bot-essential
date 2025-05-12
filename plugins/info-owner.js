let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let vcard = `BEGIN:VCARD\nVERSION:4.0\nN:;𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲;;\nFN:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nORG:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nTITLE:\nitem1.TEL;waid=393515533859:393515533859\nitem1.X-ABLabel:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲⁩', contacts: [{ vcard }] }}, {quoted: m})
    }
    handler.help = ['proprietario']
    handler.tags = ['info']
    handler.command = [ 'creatore',] 
    
    export default handler