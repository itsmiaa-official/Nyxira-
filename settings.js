import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

global.botNumber = '' 
global.owner = [
  ['523339705623', 'dueña', true],
  ['923297474483', 'dueña', true],
  ['66825539106','dueña',true]
]
global.mods = []
global.prems = []
global.suittag = ['923297474483']

global.botname = '𝗙𝗼𝘂𝗱𝗧𝗵𝗿𝗲𝗲'
global.vs = '3.0.0'
global.author = '𝗙𝗼𝘂𝗱𝗧𝗵𝗿𝗲𝗲'
global.sticker = '𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗙𝗼𝘂𝗱𝗧𝗵𝗿𝗲𝗲'

global.banner = 'https://files.catbox.moe/vc3e0h.jpg'
global.icono = ''
global.logo = ''

global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.moneda = 'dolares 💸'
global.multiplier = 60
global.prefix = /^[./!#?]/

global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.md = 'https://github.com/benjaxzz/Nyxira'
global.ch = { id: '120363345778623279@newsletter' }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright(`✰ [CONFIG] Se han actualizado los ajustes del bot.`))
  import(`${file}?update=${Date.now()}`)
})
