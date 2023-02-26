module.exports = async (client, interaction) => {
  const member = interaction.member;
  let role;
  switch (interaction.values[0]) {
    case "Ela/Dela":
      role = interaction.guild.roles.cache.get("1077604991864410182");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Ele/Dele":
      role = interaction.guild.roles.cache.get("1077605074810982420");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Elu/Dele":
      role = interaction.guild.roles.cache.get("1077605169577066556");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Qualquer um":
      role = interaction.guild.roles.cache.get("1077605279396536421");
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
