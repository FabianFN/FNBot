function handler(m) {
  
  this.sendContact(m.chat, '51933748331', '𝓕ⲁⲃⲓⲁⲛ', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
