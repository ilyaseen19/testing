const { getUsers } = require("./ip.controller");
const router = require("express").Router();

router.get("/", getUsers);

module.exports = router;
