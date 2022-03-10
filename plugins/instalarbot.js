let handler = async m => m.reply(`
*◄┢┅͜͡✇⟬↯ື ►∉𝓕𝓪͢͢͢𝓫𝓲𝓪𝓷∌◄ ↯ື⟭✇͜͡┅┧►*

💥 𝐑𝐄𝐐𝐔𝐈𝐒𝐈𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐋𝐀 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 💥
➤ Termux  
➤ 1 GB de memoria en el teléfono
➤ Aconsejable un WhatsApp secundario
➤ Aconsejable un numero secundario
➤ 2 teléfonos o un 1 teléfono y una PC (es temporal - solo para escanear un código QR)

💥 𝐀𝐑𝐄𝐀 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 💥
➤ Termux: https://f-droid.org/en/packages/com.termux/
➤ WhatsApp recomendado: https://www.mediafire.com/file/j5vmyudprv012ol/%25E2%259E%25A2_SOLITARIO_BUSINESS_%25E2%259E%25A2_2.21.19.21.apk/file
   
💥 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 𝐕𝐈𝐀 𝐆𝐈𝐓𝐇𝐔𝐁 💥
➤ apt update && apt upgrade -y -y
➤ pkg install nodejs -y
➤ pkg install ffmpeg -y
➤ pkg install imagemagick -y
➤ pkg install npm 
➤ termux-setup-storage
➤ cd storage/downloads/FNBot
➤ npm start

° Escaneas el código QR, tienes 30 segundos para hacerlo

💥 INFO EXTRA 💥
- Puede ocasionar que el numero se vaya a soporte 
➤ PayPal para apoyo voluntario: https://www.paypal.me/fabianxd692
➤ Numero de ayuda durante la instalacion: wa.me/51933748331 (No Bot, solo ayuda durante la instalación)

*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
