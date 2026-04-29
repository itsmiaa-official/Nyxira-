var handler = async (m, { conn, participants, isAdmin, isBotAdmin }) => {
    const emoji = '😈';
    const emoji2 = '⚠️';
    const emojiSuccess = '✅';
    const isOwner = global.owner.map(o => typeof o === 'string' ? o : o[0]).includes(m.sender);

    if (!isAdmin && !isOwner) {
        return conn.reply(m.chat, `ꕤ *Solo los administradores pueden usar este comando.*`, m);
    }

    if (!isBotAdmin) {
        return conn.reply(m.chat, `ꕤ *Necesito permisos de administrador para eliminar miembros.*`, m);
    }

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const globalOwners = global.owner.map(o => typeof o === 'string' ? o : o[0] + '@s.whatsapp.net');

    let toKick = participants
        .map(p => p.id)
        .filter(id =>
            id !== m.sender &&
            id !== conn.user.jid &&
            id !== ownerGroup &&
            !globalOwners.includes(id)
        );

    if (toKick.length === 0) {
        return conn.reply(m.chat, `ꕤ *No hay miembros válidos para eliminar.*`, m);
    }

    try {
        // Enviar mensaje previo (se elimina en 10s)
        const warningMsg = await conn.sendMessage(m.chat, {
            text: `*Gracias por estar en el grupo, serán domados por mi legion.* 🔥\n\n*Creaciones by Bajo Bots*`,
        }, { quoted: m });

        await new Promise(res => setTimeout(res, 1000));
        await conn.sendMessage(m.chat, {
            delete: warningMsg.key
        });

        // Eliminar miembros
        await conn.groupParticipantsUpdate(m.chat, toKick, 'remove');

        // Enviar mensaje final (se elimina en 4s)
        const finalMsg = await conn.sendMessage(m.chat, {
            text: `ꕥ *Todos fueron eliminados del grupo.*\n\n🔥 *Fuiste domado por FoudThree* 😈🔥\n\n> *By FoudThree 404*`,
        }, { quoted: m });

        await new Promise(res => setTimeout(res, 1000));
        await conn.sendMessage(m.chat, {
            delete: finalMsg.key
        });

    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, `ꕥ *Error al intentar eliminar a los miembros.*`, m);
    }
};

handler.help = ['kickall'];
handler.tags = [''];
handler.command = ['kickall', 'eliminaratodos', 'sacaratodos', 'vaciar'];
handler.group = true;
handler.botAdmin = true;
handler.register = false;

export default handler;
