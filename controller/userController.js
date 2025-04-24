const userServ = require('../services/userService');

const funcHello = async (req, res) => {
  res.send("Hello World!");
};

const getusers = async (req, res) => {
  const data = userServ.getAllUsers()
  if (data) {
    return res.send(data);
  }
  return res.status(400)
};

const getCreateUser = async (req, res) => {
  const data = userServ.getAllUsers(req)
  if (data) {
    return res.send(data);
  }
  return res.status(400)
};

const getOneUser = async (req, res) => {
  const data = userServ.getAllUsers(req)
  if (req.params) {
    userServ.getOneUser(req)
  }
  return res.status(400)
};

const deleteUsers = async (req, res) => {
  const data = userServ.getAllUsers(req)
  if (data) {
    return res.send(data);
  }
  return res.status(400)
};

module.exports = {
  funcHello: funcHello,
  getusers: getusers,
  getCreateUser: getCreateUser,
  getOneUser: getOneUser,
  deleteUsers: deleteUsers,
};