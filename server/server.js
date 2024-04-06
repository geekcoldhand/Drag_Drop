const express = require("express");
const db = require("./config/connection");

const app = express();

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    if (res.statusCode == 404) {
      res.status(400).send("Could not GET specific locate resouce");
    } else res.status(500).send("Internal Server Error, Could not handle GET");
  }
});

app.listen(5432, () => {
  console.log("Server is running on port 5432");
});
