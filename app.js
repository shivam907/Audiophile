const express = require("express");
const mainRoutes = require("./routers/mainRoutes");
const path = require("path");
const app = express();

require("dotenv").config();
app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRoutes);
app.get("*", (req, res) => {
  res.redirect("/");
});
app.listen(process.env.PORT || 3000);
