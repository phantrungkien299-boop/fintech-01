const express = require("express");
const axios = require("axios");

const app = express();

app.get("/financial/users", async (req,res) => {

  console.log("financial called");

  try {

    const r = await axios.get(
      "http://fintech_transaction:5001/transaction/users"
    );

    res.json({
      service: "financial",
      next: r.data
    });

  } catch(err) {

    res.status(500).send(err.message);

  }

});

app.listen(5002, () => {
  console.log("financial running");
});

