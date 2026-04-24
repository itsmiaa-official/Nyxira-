let handler = async (m, { conn, usedPrefix }) => {

  const who = m.sender
  const taguser = `@${who.split('@')[0]}`
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

  const productMessage = {
    product: {
      productImage: { url: banner },
      productId: '24529689176623820',
      title: `${botname} |  ${vs}`,
      description: '',
      currencyCode: 'USD',
      priceAmount1000: '0',
      retailerId: 1677,
      url: 'https://wa.me/0',
      productImageCount: 1
    },

    businessOwnerJid: who || '0@s.whatsapp.net',

    caption: `

> . ﹡ ﹟ ✰ ׄ ⬭ *¡ʜᴇʟʟᴏ!* ${taguser}

*ㅤꨶ〆⁾ ㅤׄㅤ⸼ㅤׄ *͜♰* ㅤ֢ㅤ⸱ㅤᯭִ*
ㅤ𓏸𓈒ㅤׄ *sᴏʏ ::* ${botname}
ׅㅤ𓏸𓈒ㅤׄ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ::* @_.benjaxzz
ׅㅤ𓏸𓈒ㅤׄ *ᴠᴇʀsɪᴏɴ ::* ${vs}
ׅㅤ𓏸𓈒ㅤׄ *ᴜᴘᴛɪᴍᴇ ::* ${uptime}

> ## \`𑊐𑊐ㅤׅ  𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥ㅤׄ  ത᪲\`

> \`•\` ${usedPrefix}play
> \`•\` ${usedPrefix}tiktok
> \`•\` ${usedPrefix}tt
> \`•\` ${usedPrefix}pin
> \`•\` ${usedPrefix}pinterest
> \`•\` ${usedPrefix}ig
> \`•\` ${usedPrefix}instagram 
> \`•\` ${usedPrefix}fb
> \`•\` ${usedPrefix}facebook 

> ## \`𑊐𑊐ㅤׅ  𝗜𝗡𝗙𝗢ㅤׄ  ത᪲\`
 
> \`•\` ${usedPrefix}ping
> \`•\` ${usedPrefix}menu

> ## \`𑊐𑊐ㅤׅ 𝗢𝗪𝗡𝗘𝗥ㅤׄ  ത᪲\`

> \`•\` ${usedPrefix}update 
> \`•\` ${usedPrefix}cleartmp 
> \`•\` ${usedPrefix}detectar

> ## \`𑊐𑊐ㅤׅ 𝗚𝗥𝗢𝗨𝗣𝗦ㅤׄ  ത᪲\`
 
> \`•\` ${usedPrefix}kick
> \`•\` ${usedPrefix}link
> \`•\` ${usedPrefix}tag
> \`•\` ${usedPrefix}promote
> \`•\` ${usedPrefix}demote
> \`•\` ${usedPrefix}open
> \`•\` ${usedPrefix}close

> ## \`𑊐𑊐ㅤׅ 𝗧𝗢𝗢𝗟𝗦ㅤׄ  ത᪲\`

> \`•\` ${usedPrefix}s
> \`•\` ${usedPrefix}sticker
> \`•\` ${usedPrefix}wm
> \`•\` ${usedPrefix}toimg
> \`•\` ${usedPrefix}inspect

`.trim(),

    title: '',
    subtitle: '',
    footer: `© ${botname} · ${author}`,

    interactiveButtons: [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: 'Channel',
          url: 'https://whatsapp.com/channel/0029Vb7eAg7Jpe8pDsWkKe2w'
        })
      }
    ],

    mentions: [who]
  }

  await conn.sendMessage(m.chat, productMessage)
}

handler.command = ['menu', 'allmenu', 'help']

export default handler


function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}
