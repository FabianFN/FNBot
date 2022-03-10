let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete al grupo oficial para pasar un rato agradable usando el Bot*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/FR3kT1xAiUHLG2dN24PFS3*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥FNBot🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
