// import packages
const path = require("path");
const express = require("express");
require("dotenv").config();

const server = express();

// env
const port = 3001;
const url = "https://api.nasa.gov/planetary/apod?api_key=";
const apik = "iAyghrxRdXMCpn1zShZBLEZwKkugVdgK2IQPF1Bu";

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "src/views"));
server.use(express.static("public"));

server.get("/", (req, res) => {
  fetch(url + apik)
    .then((res) => res.json())
    .then((data) => {
      res.render("index", { apidata: data });
    });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;
