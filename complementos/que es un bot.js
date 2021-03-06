let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Bot.jpeg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*โ::ยฟ๐๐ฎ๐ฬ ๐๐ฌ ๐ฎ๐ง ๐๐จ๐ญ ๐๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ?::โ*

- ๐๐ง ๐๐จ๐ญ ๐๐ฌ ๐ฎ๐ง๐ ๐ข๐ง๐ญ๐๐ฅ๐ข๐ ๐๐ง๐๐ข๐ ๐๐ซ๐ญ๐ข๐๐ข๐๐ข๐๐ฅ ๐ช๐ฎ๐ ๐ซ๐๐๐ฅ๐ข๐ณ๐ ๐ญ๐๐ซ๐๐๐ฌ ๐ช๐ฎ๐ ๐ฅ๐ ๐ข๐ง๐๐ข๐ช๐ฎ๐ ๐๐จ๐ง ๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ, ๐๐ง ๐๐ฅ ๐๐๐ฌ๐จ ๐๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐ฉ๐ฎ๐๐๐๐ฌ ๐๐ซ๐๐๐ซ ๐ฌ๐ญ๐ข๐๐ค๐๐ซ๐ฌ, ๐๐๐ฌ๐๐๐ซ๐ ๐๐ซ ๐ฆ๐ฎฬ๐ฌ๐ข๐๐, ๐ฏ๐ข๐๐๐จ๐ฌ, ๐๐ซ๐๐๐ซ ๐ฅ๐จ๐ ๐จ๐ฌ ๐ฉ๐๐ซ๐ฌ๐จ๐ง๐๐ฅ๐ข๐ณ๐๐๐จ๐ฌ ๐ฒ ๐ฆ๐ฎ๐๐ก๐จ ๐ฆ๐๐ฌ, ๐๐ฌ๐ญ๐จ ๐๐ ๐๐จ๐ซ๐ฆ๐ ๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐ณ๐๐๐, ๐จ ๐ฌ๐๐ ๐ช๐ฎ๐ ๐ฎ๐ง ๐ก๐ฎ๐ฆ๐๐ง๐จ ๐ง๐จ ๐ข๐ง๐ญ๐๐ซ๐๐ข๐๐ซ๐ ๐๐ง ๐๐ฅ ๐ฉ๐ซ๐จ๐๐๐ฌ๐จ 

- ๐๐๐ซ๐ ๐ฏ๐๐ซ ๐๐ฅ ๐ฆ๐๐ง๐ฎฬ ๐๐ ๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐ฉ๐ฎ๐๐๐๐ฌ ๐ฎ๐ฌ๐๐ซ #menu

*_ใ FฬธฬฬออฬฬAฬธอออฬบอฬบBฬตออออฬIฬดอฬอฬฆฬกฬกAฬธฬอออฬปNฬธฬออฬขฬอ xฬธอออฬผฬผฬฆdฬธฬพออฬขฬบอdฬดออออฬขฬdฬธอฬออฬซฬ ใ_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpeg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.customPrefix = /ยฟQuรฉ es un Bot?|ยฟquรฉ es un Bot?|quรฉ es un Bot|que es un Bot|Quรฉ es un Bot?|Que es un Bot?/i
handler.command = new RegExp

handler.fail = null

module.exports = handler
