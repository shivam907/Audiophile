const express = require("express");
const path = require("path");
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 3000);
