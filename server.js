const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "public")));

app.get("/", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});
app.get("/secrets", (_, res) => {
  res.sendFile(join(__dirname, "secrets.html"));
});
app.get("/logout", (_, res) => {
  res.sendFile(join(__dirname, "logout.html"));
});
app.get("/401", (_, res) => {
  res.sendFile(join(__dirname, "401.html"));
});
process.on("SIGINT", function() {
  process.exit();
});

module.exports = app;
