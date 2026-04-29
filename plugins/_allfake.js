import { watchFile, unwatchFile } from 'fs'
import moment from 'moment-timezone'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m, { conn }) {

    global.logo = 'https://files.catbox.moe/vc3e0h.jpg' 
    global.iconorcanal = 'https://files.catbox.moe/vc3e0h.jpg'
    
    global.idcanal = "120363408100068@newsletter" 
    global.nombrecanal = "𝗙𝗼𝘂𝗱𝗧𝗵𝗿𝗲𝗲 𝗪𝗮 - 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗖𝗵𝗮𝗻𝗻𝗲𝗹"

    global.rcanal = {
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: { newsletterJid: idcanal, serverMessageId: 100, newsletterName: nombrecanal },
        externalAdReply: {
          title: '𝗙𝗼𝘂𝗱𝗧𝗵𝗿𝗲𝗲 𝗪𝗮 • 𝟲𝟭𝟲',
          thumbnailUrl: 'https://chat.whatsapp.com/KAhwtBdTOYlFsbsU8rwo79',
          thumbnail: await (await fetch(global.iconorcanal)).buffer(),
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }

    global.done = '✅'
    global.error = '⚠️'
    global.rwait = '⏳'

    const time = moment.tz('America/Argentina/Buenos_Aires').hour()
    global.saludo = time >= 5 && time < 12 ? '☀️ Buenos días' : time >= 12 && time < 18 ? '🌤️ Buenas tardes' : '🌙 Buenas noches'

    global.fkontak = {
        key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },
        message: { contactMessage: { displayName: m.pushName || 'Player', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${m.pushName || 'User'};;;\nFN:${m.pushName || 'User'}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Celular\nEND:VCARD` } }
    }
}

export default handler

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log('✰ Actualizado: _allfeke.js (Bot Edition)')
})

