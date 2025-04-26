const userServ = require('../services/userService');

const funcHello = async (req, res) => {
  res.send("Hello World!");
};

const getusers = async (req, res) => {
  const data = await userServ.getAllUsers()
  if (data) {
    return res.send(data)
  }
  return res.status(400)
};

const createUser = async (req, res) => {
  const data = await userServ.createUser(req)
  if (data) {
    console.log("User created successfully:", data);
    return res.status(201).json(data);
  }
  return res.status(400)
};

const getOneUser = async (req, res) => {
  if (req.params) {
    const response = await userServ.getOneUser(req)
    return res.json(response).status(200);
  }
  return res.status(400)
};

const deleteUsers = async (req, res) => {
  const data = await userServ.deleteUser(req)
  if (data) {
    return res.json(data).status(200);
  }
  return res.status(400)
};

module.exports = {
  funcHello: funcHello,
  getusers: getusers,
  createUser: createUser,
  getOneUser: getOneUser,
  deleteUsers: deleteUsers,
};