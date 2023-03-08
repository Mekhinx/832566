const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "157.245.59.56",
  user: "u6400898",
  password: "6400898",
  database: "u6400898_DIT322",
  port: 3366,
});

var app = express();
app.use(cors());
app.use(express.json());

app.get("/customer", function (req, res) {
  connection.query("SELECT * FROM a1_customer", function (err, results) {
    console.log(results); //แสดงผลที่ console
    res.json(results); //ตอบกลับ request
  });
});

app.get("/bag", function (req, res) {
  connection.query("SELECT * FROM a1_bag", function (err, results) {
    console.log(results); //แสดงผลที่ console
    res.json(results); //ตอบกลับ request
  });
});

app.get("/order", function (req, res) {
  connection.query("SELECT * FROM a1_order", function (err, results) {
    console.log(results); //แสดงผลที่ console
    res.json(results); //ตอบกลับ request
  });
});

app.listen(5000, () => {
  console.log("Server is started.");
});
