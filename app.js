const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/send/token/1", (req, res) => {
  const token = jwt.sign(
    { mechanism: "bearer token in the auth headers" },
    "THIS IS MY FIRST SECRET"
  );
  res.type("json");
  res.send({ token });
});

app.get("/receive/token/1", (req, res) => {
  console.log(req.headers.authorization);
  const bearer = req.headers.authorization;
  const token = bearer.split(" ")[1];
  const { mechanism } = jwt.verify(token, "THIS IS MY FIRST SECRET");
  res.send(`Your token waas delivered to us via ${mechanism}`);
});

app.get("/send/token/2", (req, res) => {
  const token = jwt.sign({ mechanism: "cookies" }, "THIS IS MY SECOND SECRET");
  res.cookie("token", token);
  res.end();
});

app.get("/receive/token/2", (req, res) => {
  const { token } = req.cookies;
  const { mechanism } = jwt.verify(token, "THIS IS MY SECOND SECRET");
  res.send(`Your token waas delivered to us via ${mechanism}`);
});

app.get("/clear", (req, res) => {
  res.clearCookie('token');
  res.end();
});

module.exports = app;
