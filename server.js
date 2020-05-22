//Import Npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

//Http Requrest logger
app.use = morgan("tiny");

//Routes
app.get("/api", (req, res) => {
  const data = {
    username: "Urwah",
    age: "5"
  };
  res.json(data);
});
app.get("/api/name", (req, res) => {
  const data = {
    username: "H.M.Urwah",
    age: "25"
  };
  res.json(data);
});

app.listen(PORT, console.log(`running on port${PORT}`));
