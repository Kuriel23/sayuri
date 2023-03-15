const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  if (message.author.id !== "354233941550694400") return 0;
  const embed = new discord.EmbedBuilder()
    .setColor("#9ae6b4")
    .setTitle("ꔫ   ֪  Suporte Dream Night")
    .setDescription(
      "**Informações sobre os tickets:**\n\n*੭    ⊹ Os tickets servem para o atendimento dos assuntos acima, então por favor, não abra um ticket sem precisar ou por motivo nenhum, muito menos nos apresse para atender.*\n\n⏜  ♡ Em casos de denúncias, vale ressaltar que você precisa mandar as provas da infração, o ID do usuário e um texto explicando a situação.\n\n__Após abrir um ticket, por favor tenha paciência e aguarde!__"
    )
    .setImage("https://i.imgur.com/nO7nwRl.jpeg");
  const row = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("suporte")
      .setPlaceholder("Tópicos")
      .addOptions([
        {
          label: "Dúvidas",
          value: "Dúvidas",
        },
        {
          label: "Denúncias",
          value: "Denúncias",
        },
        {
          label: "Patrocínio",
          value: "Patrocínio",
        },
        {
          label: "Sugestões",
          value: "Sugestões",
        },
        {
          label: "Feedbacks",
          value: "Feedbacks",
        },
        {
          label: "Comprar cargos",
          value: "Comprar cargos",
        },
        {
          label: "Receber prêmios",
          value: "Receber prêmios",
        },
      ])
  );
  message.channel.send({
    embeds: [embed],
    components: [row],
  });
};
