const express = require("express");
const axios = require("axios");

const app = express();

app.get("/transaction/users", async (req,res) => {
console.log("transaction called");
  try {

    const r = await axios.get(
      "http://fintech_adapter:5000/api/users"
    );

    res.json({
      service: "transaction",
      next: r.data
    });

  } catch(err) {

    res.status(500).send(err.message);

  }

});

app.listen(5001, () => {
  console.log("transaction running");
});
