module.exports = async (client, interaction) => {
  const member = interaction.member;
  let role;
  switch (interaction.values[0]) {
    case "Hétero":
      role = interaction.guild.roles.cache.get("1077633802865758259");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Lgbt+":
      role = interaction.guild.roles.cache.get("1077633639518584902");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Se Descobrindo":
      role = interaction.guild.roles.cache.get("1078157772224462888");
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
