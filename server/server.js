const express = require("express");
const pool = require("./connection/config");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//all products
app.get("/products", async (req, res) => {
  try {
    let product_name, log_clicks, log_date;
    const values = [product_name, log_clicks, log_date];
    const result = await pool.query("SELECT * FROM shopmetadata");
    res.json(result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Cant Get all: Internal Server Error");
  }
});

//get a products metadata

//update products metadata

//create new shop metadata
app.post("/products", async (req, res) => {
  try {
    const { product_name, log_clicks, log_date } = req.body;
    const values = [product_name, log_clicks, log_date];
    console.log(req.body);
    const result = await pool.query(
      "INSERT INTO shopmetadata (product_name, log_clicks, log_date) VALUES($1, $2, $3)",
      values
    );
    console.log(result);
    res.status(201).json({
      message: "Product created successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("No creation: Internal Server Error");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
