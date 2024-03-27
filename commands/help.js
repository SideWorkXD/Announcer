const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Display a list of available commands',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
      .setColor('#4c0385')
      .setTitle('🛠 Bot Commands')
      .setDescription('▶️  **Here are the available commands :**\n‎ ')
      .addFields(
      { name: '⚙ Setup', value: 'Configue the channel for the bot to send announcements' },
      { name: '📢 Announce', value: 'Start creating an Embed announcement Message' },
        { name: '📶 Ping', value: 'check the bot\'s latency depends on region' },
    )

    message.reply({ embeds: [embed] });
  },
};
