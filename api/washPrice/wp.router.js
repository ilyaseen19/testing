const { getUsers } = require("./wp.controller");
const router = require("express").Router();

router.get("/", getUsers);

module.exports = router;
