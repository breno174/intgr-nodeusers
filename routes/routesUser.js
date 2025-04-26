const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.getusers);
router.get("/user/:id", userControl.getOneUser);
router.post("/createuser", userControl.createUser);
router.delete("/deleteuser", userControl.deleteUsers);

module.exports = router;