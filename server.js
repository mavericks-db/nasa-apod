// import packages
const express = require("express");
require("dotenv").config();

const server = express();

// env
const port = process.env.PORT;
const url = process.env.URL;
const apik = process.env.APIK;

server.set("view engine", "ejs");
server.set("views", "./src/views");
server.use(express.static("./public"));

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
