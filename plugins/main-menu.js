import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let mentionedJid = await m.mentionedJid
let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

let txt = `
♰ ─── 𝖠𝖵𝖨𝖲𝖮 𝖣𝖤 𝖲𝖨𝖲𝖳𝖤𝖬𝖠 ─── ♰
> 𝖧𝗈𝗅𝖺, @${userId.split('@')[0]}. 𝖲𝗈𝗒 *${botname}*...

> \`Aviso:\` Ocupar comandos de b̶u̶g̶s̶ queda bajo tu responsabilidad. 
> por ese motivo recomiendo ocupar esos comandos con whatsapp anti-crash.

\`🄲🄾🄼🄰🄽🄳🄾🅂\`

*#𝗁𝖾𝗅𝗉 › #menu*
> ✧ 𝖬𝗎𝖾𝗌𝗍𝗋𝖺 𝖾𝗅 𝗆𝖾𝗇𝗎́.
*#𝗎𝗉𝗍𝗂𝗆𝖾 › #ping*
> ✧ 𝖳𝗂𝖾𝗆𝗉𝗈 𝖺𝖼𝗍𝗂𝗏𝗈. 
*#bugnuke › #bug616*
> ✧ crashea a un usuario.
*#kickall › #vaciar*
> ✧ Vaciar grupo.
*#dni › #dox*
> ✧ Doxea a un usuario (ARG)
*#argdox*
> ✧ Doxea un usuario (ARG/COL)
*#argdni*
> ✧ Información de DNI (ARG)
*#kick › #ban*
> ✧ Elimina a un usuario del grupo.
*#hidetag › #tag*
> ✧ Crea una mención invisible.
*#inspect + [enlace]*
> ✧ ve información de un canal de Whatsapp

`.trim()
await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [userId],
      externalAdReply: {
        title: `${botname} | ${vs}`,
        body: textbot,
        mediaType: 1,
        mediaUrl: redes,
        sourceUrl: redes,
        thumbnailUrl: banner,

        showAdAttribution: false,
        containsAutoReply: true,
        renderLargerThumbnail: true
      }
    }
}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
