const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  if (message.author.id !== "354233941550694400") return 0;
  const embed = new discord.EmbedBuilder()
    .setColor("#19b5ff")
    .setTitle("⌗ 〣  Escolha sua cor!")
    .setDescription(
      "Boas-vindas ao canal de cores, aqui você poderá escolher uma cor de sua preferencia para decorar seu perfil! \n\n> Nossas cores são organizadas pelos números 1, 2, 3. O número 1 representa os tons padrões das cores, o 2 os tons pastéis, e os 3 os tons neons.\n\n(Obs: Temos 2 paletas do tom azul a primeira são tons mais claros e a segunda tons mais escuros.)\n\n__tambem não é obrigatorio, isso vai de você!__"
    )
    .setImage("https://i.imgur.com/qCgpXyv.jpeg");
  const row = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("padrões")
      .setPlaceholder("Tons padrões")
      .addOptions([
        {
          label: "Branco",
          value: "Branco",
        },
        {
          label: "Cinza",
          value: "Cinza",
        },
        {
          label: "Preto",
          value: "Preto",
        },
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
          label: "Azul 1",
          value: "Azul 1",
        },
        {
          label: "Azul 2",
          value: "Azul 2",
        },
        {
          label: "Azul 3",
          value: "Azul 3",
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
          label: "Azul 4",
          value: "Azul 4",
        },
        {
          label: "Azul 5",
          value: "Azul 5",
        },
        {
          label: "Azul 6",
          value: "Azul 6",
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
  message.channel.send({
    embeds: [embed],
    components: [row, row2, row3],
  });
};