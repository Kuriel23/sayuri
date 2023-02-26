module.exports = async (client, interaction) => {
  const member = interaction.member;
  let role;
  switch (interaction.values[0]) {
    case "Parcerias":
      role = interaction.guild.roles.cache.get("1077702127671066754");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Mov Chat":
      role = interaction.guild.roles.cache.get("1077702357049167972");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Sorteios":
      role = interaction.guild.roles.cache.get("1077724500776460338");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Eventos":
      role = interaction.guild.roles.cache.get("1077724603297828884");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Mov Call":
      role = interaction.guild.roles.cache.get("1077724438100979754");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Jornal":
      role = interaction.guild.roles.cache.get("1077724656611627040");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Anúncios":
      role = interaction.guild.roles.cache.get("1079188510549999656");
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
