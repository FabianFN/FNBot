let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*------ ๐๐ฌ๐ฌ๐โข๐ด๐ฏ๐๐๐ ------*
*=> ยฟโ๐ฆ๐๐๐ฃ๐๐ค ๐ฅ๐๐๐๐ฃ ๐ฆ๐ ๐น๐ ๐ฅ ๐๐๐ฅ๐๐ง๐๐๐  ๐๐/๐ ๐ช ๐ค๐๐ ๐ฆ๐ฅ๐๐๐๐ซ๐๐ฃ ๐ฅ๐๐ฃ๐๐ฆ๐ฉ?* 
*โค Beet-Nodes viene para quedarse!! Beet-Nodes es un servidor/host que mantendrรก tu Bot activado 24/7 y sin la necesidad de que este viendo que no se apague, con una interfaz muy sencilla, precios accesibles y un soporte excelente podrรกs activar cualquier Bot para tenerlo a tu disposiciรณn* 

*โค Host: https://billing.hirobeet.xyz*
*โค Para mas informacion contacta con Hiro al wa.me/447309247974*
*=> Solo interesados en el abrir su servidor*
*=> No permitido Bots en el grupo*

*_Coแดสสษชษขสแด 2021-2022_*
*_Cแดษดาแด แดสแดแดษชแดแดแดแด แดแด สษชสแด_*
*_Hษชสแด แดสแดแดษชแดแดแดแด แดแด แดแดษดาแด_*
*_Tแดแดแดs สแดs แดแดสแดแดสแดs สแดsแดสแด แดแดแดs_*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*๐ฅ BEET-NODES ๐ฅ*', 'status@broadcast')
}
handler.command = /^(sponsor|patrocinador|publicidad|beetnodes|beet-nodes)$/i

module.exports = handler
