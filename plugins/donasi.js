let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
*XL:* [081938681806]
*AXIS:* [083137750223]

┣➥ *Dana:* [08818770766]
┣➥ *Saweria:* [https://saweria.co/Scaff]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/628818770766*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
