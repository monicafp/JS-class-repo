var human = {
  age: age,
  sex: sex,
  name: name,
  skills: {
    skillName: skillName,
    skillProficiency: skillProficiency
  },
  printSkill: function(skillName) {
    return skillProficiency;
  },
  printHuman: function() {
    console.log(human.name + "\n" + human.age + "\n" + human.sex + "\n" + human.skills)
  }
};
