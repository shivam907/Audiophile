const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();
app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(process.env.PORT || 3000);
