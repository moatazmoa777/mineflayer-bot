const mineflayer = require('mineflayer')

// استبدل القيم التالية
const bot = mineflayer.createBot({
  host:actiongameon.aternos.me
  port:54949
  username:moatazmoa
})

bot.on('spawn', () => {
  console.log('بوت Mineflayer تم تشغيله!')
})
