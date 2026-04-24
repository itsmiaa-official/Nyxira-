import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

global.botNumber = '' 
global.owner = [
  ['5492644996684', '𝐁𝐞𝐧𝐣𝐚', true],
  ['923297474483', '𝐁𝐞𝐧𝐣𝐚', true],
  ['5492645765402','𝐁𝐞𝐧𝐣𝐚',true]
]
global.mods = []
global.prems = []
global.suittag = ['923297474483']

global.botname = '𝐍ᥡ᥊іrᥲ'
global.vs = '1.0.0 (Lite) '
global.author = '@_.𝗯𝗲𝗻𝗷𝗮𝘅𝘇𝘇'
global.sticker = 's𝗍іᥴkᥱr ᥴrᥱᥲ𝗍ᥱძ ᑲᥡ Nyxira'

global.banner = 'https://files.catbox.moe/vpv1j2.png'
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
