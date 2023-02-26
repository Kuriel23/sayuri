module.exports = async (client, interaction) => {
  const member = interaction.member;
  let role;
  switch (interaction.values[0]) {
    case "Feminino":
      role = interaction.guild.roles.cache.get("1077603244802584597");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Masculino":
      role = interaction.guild.roles.cache.get("1077603691428859914");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Gênero Fluído":
      role = interaction.guild.roles.cache.get("1077603856281772134");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Não Binário":
      role = interaction.guild.roles.cache.get("1077604461272375408");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Agênero":
      role = interaction.guild.roles.cache.get("1077604577286828052");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Outro":
      role = interaction.guild.roles.cache.get("1077604670673006632");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
  }
  interaction.reply({
    content: "Operação realizada com sucesso.",
    ephemeral: true,
  });
};
