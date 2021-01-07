const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const log = console.log;

const app = express();

// Viewengine
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views"),
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Route
app.get("/", (req, res) => {
  res.render("main");
});

app.post("/send", (req, res) => {
  console.log(req.body);

  //   const output = `
  //     <p>You have a new contact request</p>
  //     <h3>Contact Details</h3>
  //     <ul>
  //         <li>Name: ${req.body.name}</li>
  //         <li>Company: ${req.body.company}</li>
  //         <li>Email: ${req.body.email}</li>
  //         <li>Phone: ${req.body.phone}</li>
  //     </ul>
  //     <h3>Message</h3>
  //     <p>${req.body.message}</p>
  //   `;

  //   // async..await is not allowed in global scope, must use a wrapper
  //   async function main() {
  //     // create reusable transporter object using the default SMTP transport
  //     let transporter = nodemailer.createTransport({
  //       host: "smtp.strato.de",
  //       port: 587,
  //       secure: false, // true for 465, false for other ports
  //       auth: {
  //         user: "test@hemdundfliege.com", // generated ethereal user
  //         pass: "!91MaWHh19!", // generated ethereal password
  //       },
  //     });

  //     // send mail with defined transport object
  //     let info = await transporter.sendMail({
  //       from: '"Moritz Wright" <test@hemdundfliege.com>', // sender address
  //       to: req.body.email, // list of receivers
  //       subject: "Hello ✔", // Subject line
  //       text: "Hello world?", // plain text body
  //       html: output, // html body
  //     });

  //     console.log("Message sent: %s", info.messageId);
  //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //     // Preview only available when sending through an Ethereal account
  //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  //     res.render("main", { msg: "Email has been sent" });
  //   }
  //   main().catch(console.error);
});

app.listen(8080, () => log(`Server is connected on port 8080`));
