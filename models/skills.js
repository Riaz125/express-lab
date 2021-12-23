const skills = [
    {id: 125223, skill: 'HTML', proficiency: 'medium'},
    {id: 127904, skill: 'CSS', proficiency: 'low'},
    {id: 139608, skill: 'Javascript', proficiency: 'medium'}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skills => skills.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000000;
    skills.push(skill);
  }

  function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id ===parseInt(id));
    skills.splice(idx, 1);
  }