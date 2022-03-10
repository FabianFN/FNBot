let handler = async (m, { conn, text }) => {
  if (!text) throw '*[❗] Agregue el texto que enviará el Bot*'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true
handler.register = false

handler.fail = null
handler.limit = false
module.exports = handler
