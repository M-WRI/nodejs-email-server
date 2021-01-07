const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const log = console.log;

const app = express();

// Viewengine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Route
app.get("/", (req, res) => {
  res.send("Server is Online");
});

app.listen(8000, () => log(`Server is connected on port 8000`));
