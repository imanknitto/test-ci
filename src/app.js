const express = require("express");

const app = express();

const luasSegitiga = require("./services/luasSegitiga");

app.get("/luas-segitiga", luasSegitiga);

module.exports = app;
