let users = [
  {
    id: 1,
    name: 'Ana Silva',
    email: 'ana.silva@email.com'
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    email: 'carlos.oliveira@email.com'
  }
];

let nextId = 3;

module.exports = {
  users,
  getNextId: () => nextId++
};
