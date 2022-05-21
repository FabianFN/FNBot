// NO QUITES NI CAMBIES NADA DE AQUI POR FAVOR
// AGREGA TUS DATOS SI QIERES, PERO NO QUITES LOS MIOS
let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇       「 DONAR 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ ❖ Hola persona hermosa 💙*
*┃ 👉🏻 Aquí tienes algunos datos*
*┃ para que puedas apoyar <3
*┃ -   BENEFICIARIO: 𝔽𝕒𝕓𝕚𝕒𝕟 𝔸𝕙𝕦𝕒𝕟𝕝𝕝𝕒
*┃ -   CONCEPTO: APOYO  
*┃➤ PayPal: https://www.paypal.me/fabianxd692*
*┃❖ Contáctame si necesitas otros*
*┃datos y para darte las gracias <3*
*┃❖ wa.me/51933748331*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
//PUEDES AGREGAR TUS DATOS, PERO NO QUITES LOS QUE YA ESTÁN PUESTOS
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i

module.exports = handler
