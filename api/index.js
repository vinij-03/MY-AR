const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("./models/model");
dotenv.config();
mongoose.connect(process.env.MonogUrl);
const jwtsecret = process.env.JWT_SECRET;

const app = express();

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const createdUser = await User.create({ username, password });
  jwt.sign({ userId: createdUser._id }, jwtsecret, (err ,token) => {
    if (err) throw err;
    res.cookie("token", token).status(201).json("ok");
  });
});

app.listen(3000, () => {
  console.log("Server said hello world");
});
