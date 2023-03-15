const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  if (message.author.id !== "354233941550694400") return 0;
  const embed = new discord.EmbedBuilder()
    .setColor("#19b5ff")
    .setTitle("⌗ 〣  Escolha sua cor!")
    .setDescription(
      "*• Boas-vindas ao canal de cores, aqui você poderá escolher uma cor de sua preferencia para decorar seu perfil!*\n\n> ✦ ୨ Em nossas cores possuímos três tons de cada, exceto as cores extras que não possuem três.  Temos os tons de cores padrões, pastéis e neons.\n\n__também não é obrigatorio, isso vai de você!__"
    )
    .setImage("https://i.imgur.com/qCgpXyv.jpeg");
  const row = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("padrões")
      .setPlaceholder("Tons padrões")
      .addOptions([
        {
          label: "Vermelho",
          value: "Vermelho",
        },
        {
          label: "Laranja",
          value: "Laranja",
        },
        {
          label: "Amarelo",
          value: "Amarelo",
        },
        {
          label: "Verde",
          value: "Verde",
        },
        {
          label: "Azul",
          value: "Azul",
        },
        {
          label: "Roxo",
          value: "Roxo",
        },
        {
          label: "Rosa",
          value: "Rosa",
        },
        {
          label: "Cereja",
          value: "Cereja",
        },
      ])
  );
  const row2 = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("pastéis")
      .setPlaceholder("Tons pastéis")
      .addOptions([
        {
          label: "Vermelho",
          value: "Vermelho",
        },
        {
          label: "Laranja",
          value: "Laranja",
        },
        {
          label: "Amarelo",
          value: "Amarelo",
        },
        {
          label: "Verde",
          value: "Verde",
        },
        {
          label: "Azul",
          value: "Azul",
        },
        {
          label: "Roxo",
          value: "Roxo",
        },
        {
          label: "Rosa",
          value: "Rosa",
        },
        {
          label: "Cereja",
          value: "Cereja",
        },
      ])
  );
  const row3 = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("neons")
      .setPlaceholder("Tons neons")
      .addOptions([
        {
          label: "Vermelho",
          value: "Vermelho",
        },
        {
          label: "Laranja",
          value: "Laranja",
        },
        {
          label: "Amarelo",
          value: "Amarelo",
        },
        {
          label: "Verde",
          value: "Verde",
        },
        {
          label: "Azul",
          value: "Azul",
        },
        {
          label: "Roxo",
          value: "Roxo",
        },
        {
          label: "Rosa",
          value: "Rosa",
        },
        {
          label: "Cereja",
          value: "Cereja",
        },
      ])
  );
  const row4 = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("extras")
      .setPlaceholder("Tons extras")
      .addOptions([
        {
          label: "Preto",
          value: "Preto",
        },
        {
          label: "Cinza",
          value: "Cinza",
        },
        {
          label: "Marrom",
          value: "Marrom",
        },
        {
          label: "Branco",
          value: "Branco",
        },
        {
          label: "Ciano",
          value: "Ciano",
        },
      ])
  );
  message.channel.send({
    embeds: [embed],
    components: [row, row2, row3, row4],
  });
};
