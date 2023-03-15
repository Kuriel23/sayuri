const { PermissionFlagsBits } = require("discord.js");
const discord = require("discord.js");

module.exports = async (client, interaction) => {
  const tagger = interaction.user.tag;
  if (
    interaction.guild.channels.cache.find(
      (c) => c.name === `${tagger}-${interaction.values[0]}`
    )
  ) {
    const c = interaction.guild.channels.cache.find(
      (c) => c.name === `${tagger}-${interaction.values[0]}`
    );
    interaction.reply({
      content: `Você já possui um ticket aberto em ${c}.`,
      ephemeral: true,
    });
  } else {
    interaction.guild.channels
      .create({
        name: `${tagger}-${interaction.values[0]}`,
        type: 0,
        parent: "1080284846754123776",
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [PermissionFlagsBits.ViewChannel],
          },
          {
            id: interaction.user.id,
            allow: [
              PermissionFlagsBits.ViewChannel,
              PermissionFlagsBits.SendMessages,
              PermissionFlagsBits.AttachFiles,
              PermissionFlagsBits.AddReactions,
            ],
          },
          {
            id: "1078084988970479787",
            allow: [
              PermissionFlagsBits.ViewChannel,
              PermissionFlagsBits.SendMessages,
              PermissionFlagsBits.AttachFiles,
              PermissionFlagsBits.AddReactions,
            ],
          },
          {
            id: "1078084177146167407",
            allow: [
              PermissionFlagsBits.ViewChannel,
              PermissionFlagsBits.SendMessages,
              PermissionFlagsBits.AttachFiles,
              PermissionFlagsBits.AddReactions,
            ],
          },
          {
            id: "1079500536107258026",
            allow: [
              PermissionFlagsBits.ViewChannel,
              PermissionFlagsBits.SendMessages,
              PermissionFlagsBits.AttachFiles,
              PermissionFlagsBits.AddReactions,
            ],
          },
        ],
      })
      .then((c) => {
        interaction.reply({
          content: `Seu ticket foi aberto em ${c}.`,
          ephemeral: true,
        });

        const embed = new discord.EmbedBuilder()
          .setAuthor({
            name: interaction.guild.name,
            iconURL: interaction.guild.iconURL({ dynamic: true }),
          })
          .setColor(client.cor)
          .setDescription(
            `Olá, ${interaction.user.username}, boas vindas ao seu ticket!\nAguarde alguns instantes para analisarmos o seu ticket, enquanto isso faça favor de adiantar as informações necessárias!`
          );

        const botao = new discord.ActionRowBuilder().addComponents(
          new discord.ButtonBuilder()
            .setCustomId("ft")
            .setEmoji("🔒")
            .setLabel("Fechar Ticket")
            .setStyle(2)
        );

        c.send({
          content: "<@&1079500536107258026>",
          embeds: [embed],
          components: [botao],
        }).then((msg) => msg.pin());
      });
  }
};
