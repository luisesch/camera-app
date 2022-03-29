const express = require("express");
const router = express.Router();
const parser = require("../configs/cloudinary");

const PDF = require("pdfkit"); //including the pdfkit module
const fs = require("fs"); //including the file system module

const request = require("request");

// setup nodemailer
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

// GET home page
router.get("/", (req, res, next) => {
  res.render("index");
});

// upload photo on cloudinary
router.post("/new-photo", parser.single("picture"), (req, res) => {
  res.status(200).json(req.file.path);
});

// send photo as jpg - see code for pdf below
router.post("/send-photo", (req, res, next) => {
  const img = req.body.img;
  const user = req.body.username;
  const email = req.body.email;

  const mail = {
    from: email,
    to: process.env.EMAIL_ADDRESS,
    subject: user + " has uploaded a new photo",
    html:
      "<p>Hello,</p><p>" +
      user +
      " (" +
      email +
      ") " +
      "has uploaded the attached photo.</p><p>Cheers :)</p>",
    attachments: [
      {
        filename: user + ".png",
        path: img,
      },
    ],
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.status(200);
    }
  });
});

module.exports = router;
