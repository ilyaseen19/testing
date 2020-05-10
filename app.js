require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const reqRouter = require("./api/requests/req.router");
const ironRouter = require("./api/iron/req.router");
const wpRouter = require("./api/washPrice/wp.router");
const ipRouter = require("./api/ironPrice/ip.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/requests", reqRouter);
app.use("/api/iron", ironRouter);
app.use("/api/washPrice", wpRouter);
app.use("/api/ironPrice", ipRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on PORT :", process.env.APP_PORT);
});
