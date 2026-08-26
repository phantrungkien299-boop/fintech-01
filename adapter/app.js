const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "192.168.253.155",
  user: "appuser",
  password: "123456",
  database: "demo"
});

app.get("/api/users", (req,res) => {

  console.log("adapter called");

  db.query(
    "SELECT * FROM users",
    (err,result) => {

      if(err) {
        return res.status(500).send(err);
      }

      res.json({
        service: "adapter",
        data: result
      });

    }
  );
});

app.post("/api/add", (req,res) => {

  const {name} = req.body;

  db.query(
    "INSERT INTO users(name) VALUES(?)",
    [name],
    (err,result) => {

      if(err) {
        return res.status(500).send(err);
      }

      res.json({
        ok:true
      });
    }
  );
});

app.listen(5000, () => {
  console.log("adapter running");
});
