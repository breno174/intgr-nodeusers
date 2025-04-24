const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.getusers);
router.get("/user/{id}", userControl.getusers);
router.post("/createuser", userControl.getusers);
router.delete("/deleteuser", userControl.getusers);

module.exports = router;