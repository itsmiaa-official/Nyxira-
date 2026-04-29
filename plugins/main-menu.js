import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let mentionedJid = await m.mentionedJid
let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

const fechaHora = new Date().toLocaleString('es-AR', {
  timeZone: 'America/Argentina/Buenos_Aires',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})

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

`.trim()

// 👇 ICONO (usa tu banner o uno pequeño)
let icon = await (await fetch(banner)).buffer()

await conn.sendMessage(m.chat, {
  document: Buffer.from('Menu'),
  mimetype: 'application/pdf',
  fileName: `${botname} `,
  fileLength: 999999999999,
  pageCount: 1,
  caption: txt,
  mentions: [userId],
    externalAdReply: {
      title: `${botname} | ${vs}`,
      body: `${fechaHora}`,
      mediaType: 1,
      mediaUrl: "https:/github.com",
      sourceUrl: "https:/github.com",
      thumbnail: icon, // 👈 ICONO
      renderLargerThumbnail: false, // 👈 ICONO PEQUEÑO
      showAdAttribution: false
    }
  }
}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler


function clockString(ms) {
let seconds = Math.floor((ms / 1000) % 60)
let minutes = Math.floor((ms / (1000 * 60)) % 60)
let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
return `${hours}h ${minutes}m ${seconds}s`
}
