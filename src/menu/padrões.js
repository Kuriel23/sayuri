module.exports = async (client, interaction) => {
  const member = interaction.member;
  let role;
  switch (interaction.values[0]) {
    case "Branco":
      role = interaction.guild.roles.cache.get("1077725046035988642");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Cinza":
      role = interaction.guild.roles.cache.get("1077725172443918387");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Preto":
      role = interaction.guild.roles.cache.get("1077725274415845396");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Vermelho":
      role = interaction.guild.roles.cache.get("1077725942010630234");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Laranja":
      role = interaction.guild.roles.cache.get("1077749074264084571");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Amarelo":
      role = interaction.guild.roles.cache.get("1077751330623463455");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Verde":
      role = interaction.guild.roles.cache.get("1077754987721003058");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Azul 1":
      role = interaction.guild.roles.cache.get("1077754987721003058");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Azul 2":
      role = interaction.guild.roles.cache.get("1077755146378948658");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Azul 3":
      role = interaction.guild.roles.cache.get("1077755257632862228");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Roxo":
      role = interaction.guild.roles.cache.get("1077755848169902140");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Rosa":
      role = interaction.guild.roles.cache.get("1077757823280230400");
      if (member.roles.cache.has(role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
      break;
    case "Cereja":
      role = interaction.guild.roles.cache.get("1077758180051914833");
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
