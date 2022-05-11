require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const plantsRouter = require("./routers/plants-router");
const usersRouter = require("./routers/users-router");
const welcomeRouter = require("./routers/welcome-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.JWT_SECRET,
  })
);

server.use("/", welcomeRouter);
server.use("/users");
server.use("/plants", plantsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message:
      "Something went wrong with retrieving your plants, try again later",
  });
});

module.exports = server;
