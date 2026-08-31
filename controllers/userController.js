const { users, getNextId } = require('../data/users');

const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e e-mail são obrigatórios'
    });
  }

  const user = {
    id: getNextId(),
    name,
    email
  };

  users.push(user);

  return res.status(201).json({
    data: user
  });
};

const getUsers = (req, res) => {
  return res.status(200).json({
    data: users
  });
};

const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(item => item.id === id);

  if (!user) {
    return res.status(404).json({
      error: 'Usuário não encontrado'
    });
  }

  return res.status(200).json({
    data: user
  });
};

const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(item => item.id === id);

  if (!user) {
    return res.status(404).json({
      error: 'Usuário não encontrado'
    });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'Nome e e-mail são obrigatórios'
    });
  }

  user.name = name;
  user.email = email;

  return res.status(200).json({
    data: user
  });
};

const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: 'Usuário não encontrado'
    });
  }

  users.splice(index, 1);

  return res.status(204).send();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
