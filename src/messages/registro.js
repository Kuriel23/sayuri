const discord = require("discord.js");

module.exports = async (client, message) => {
  message.delete();
  if (message.author.id !== "354233941550694400") return 0;
  const embed = new discord.EmbedBuilder()
    .setColor(client.cor)
    .setTitle("Registro!")
    .setDescription(
      "彡！**Registre-se** ‹𝟹 \n\n> ꒰ ✿ Olá, boas-vindas ao canal de registro! Para sabermos sobre você apenas aperte nas opções abaixo que correspondem com você, como gênero, idade, pronomes, etc!\n\n__Mas caso você não queira fazer, não iremos te obrigar, obrigada pela atenção, até mais meu bem!__"
    )
    .setImage("https://i.imgur.com/VU2LAa5.png");
  const row = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("genero")
      .setPlaceholder("Gênero")
      .addOptions([
        {
          label: "Feminino",
          value: "Feminino",
        },
        {
          label: "Masculino",
          value: "Masculino",
        },
        {
          label: "Gênero Fluído",
          value: "Gênero Fluído",
        },
        {
          label: "Não Binário",
          value: "Não Binário",
        },
        {
          label: "Agênero",
          value: "Agênero",
        },
        {
          label: "Outro",
          value: "Outro",
        },
      ])
  );
  const row2 = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("idade")
      .setPlaceholder("Idade")
      .addOptions([
        {
          label: "-18",
          value: "-18",
        },
        {
          label: "+18",
          value: "+18",
        },
      ])
  );
  const row3 = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("pronomes")
      .setPlaceholder("Pronomes")
      .addOptions([
        {
          label: "Ela/Dela",
          value: "Ela/Dela",
        },
        {
          label: "Ele/Dele",
          value: "Ele/Dele",
        },
        {
          label: "Elu/Dele",
          value: "Elu/Dele",
        },
        {
          label: "Qualquer um",
          value: "Qualquer um",
        },
        {
          label: "Outro",
          value: "Outro",
        },
      ])
  );
  const row4 = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("sexualidade")
      .setPlaceholder("Sexualidade")
      .addOptions([
        {
          label: "Hétero",
          value: "Hétero",
        },
        {
          label: "Lgbt+",
          value: "Lgbt+",
        },
        {
          label: "Se Descobrindo",
          value: "Se Descobrindo",
        },
      ])
  );
  const row5 = new discord.ActionRowBuilder().addComponents(
    new discord.StringSelectMenuBuilder()
      .setCustomId("pings")
      .setPlaceholder("Pings")
      .addOptions([
        {
          label: "Parcerias",
          value: "Parcerias",
        },
        {
          label: "Mov Chat",
          value: "Mov Chat",
        },
        {
          label: "Sorteios",
          value: "Sorteios",
        },
        {
          label: "Eventos",
          value: "Eventos",
        },
        {
          label: "Mov Call",
          value: "Mov Call",
        },
        {
          label: "Jornal",
          value: "Jornal",
        },
        {
          label: "Anúncios",
          value: "anúncios",
        },
      ])
  );
  message.channel.send({
    embeds: [embed],
    components: [row, row2, row3, row4, row5],
  });
};
