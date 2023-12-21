const user_service = require("../services/user.service");
let User = require("../models/user.model");

// get all users
async function getAll(req, res) {
  [User] = await user_service.fetchAll();

  try {
    return res.status(200).json(User);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

// get user by id
async function getById(req, res) {
  User = await user_service.fetchById(req.params.id);

  try {
    return res.status(200).json(User);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// save user
async function save(req, res) {
  User = await user_service.create(req.body);

  try {
    return res.status(201).json({ User });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// update user
async function edit(req, res) {
  User = await user_service.update(
    { id: req.params.id, name: req.body.name },
    id
  );

  try {
    return res.status(201).json(User);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// remove user by id
async function remove(req, res) {
  User = await user_service.delete(req.params.id);
  try {
    return res.status(200).json(User);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

// remove users
async function removeAll(req, res) {
  const [users] = await user_service.deleteAll();
  try {
    return res.status(200).json({ users: users });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

module.exports = {
  getAll,
  getById,
  save,
  edit,
  remove,
  removeAll,
};
