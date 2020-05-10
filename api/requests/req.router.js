const { createRequest } = require("./req.controller");
const router = require("express").Router();

router.post("/", createRequest);

module.exports = router;