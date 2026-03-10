const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Bot hakkında bilgi verir'),
    
    async execute(interaction) {
        const version = '2.0.0'; // Botun versiyonunu buraya yazın
        if (process.env.VERSION) {
            version = process.env.VERSION; // Eğer .env dosyasında tanımlıysa onu kullan
        }
        const embed = new EmbedBuilder()
        .setTitle('🤖 Bot Hakkında')
        .setDescription('Bu bot, Discord sunucularında üyelerin katılım bilgilerini listelemek için tasarlanmıştır.')
        .addFields(
            { name: 'Yapımcı', value: 'Ramazanenescik04', inline: true },
            { name: 'Versiyon', value: version, inline: true },
            { name: 'GitHub', value: 'https://github.com/Ramazanenescik04/EnesBot', inline: true}
        )
        .setColor('#5865F2')
        .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    },
};
// Bu komut, botun hakkında bilgi vermek için kullanılabilir.
