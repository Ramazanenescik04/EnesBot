const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rswatch')
        .setDescription('SitWatchdaki Videolardan Birini Rasgere Açar'),
    async execute(interaction) {
        const res = await fetch('https://sitwatch.net/api/videos/latest?page=1&limit=1');
        const json = await res.json();

        const videoId = Math.floor(Math.random() * json[0].id) + 1;
        const videoUrl = `https://sitwatch.net/watch/${videoId}`;
        
        const embed = new EmbedBuilder()
            .setTitle('Rasgere Watch')
            .setDescription('Rasgere Watch, SitWatchdaki Videolardan Birini Rasgere Açar.')
            .addFields(
                { name: 'Value', value: videoUrl },
            )
            .setColor('#5865F2')
            .setTimestamp()

        await interaction.reply({ embeds: [embed] });
    }
};
