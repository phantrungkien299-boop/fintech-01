const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.get("/api/users", async (req,res) => {

  try {

    const r = await axios.get(
      "http://fintech_financial:5002/financial/users"
    );

    res.json({
      service: "gateway",
      next: r.data
    });

  } catch(err) {

    res.status(500).send(err.message);

  }

});

app.post("/api/add", async (req,res) => {

  try {

    const r = await axios.post(
      "http://fintech_adapter:5000/api/add",
      req.body
    );

    res.json(r.data);

  } catch(err) {

    res.status(500).send(err.message);

  }

});

app.listen(3000, () => {
  console.log("gateway running");
});
