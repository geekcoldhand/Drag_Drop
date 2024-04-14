const express = require("express");
const pool = require("./connection/config");
const cors = require("cors");

const app = express();

const coorOptions = {
  origin: "http://127.0.0.1:8080", //take out for prod
  optionSucessStatus: 200,
  credentials: true //take out for prod
}
app.use(cors(coorOptions));
app.use(express.json());

//update product clicks
app.put("/products/:id/clicks", async (req, res) => {
  try {
    const productId = req.params.id;
 
    if (!productId) {
      return res.status(400).json({ error: 'Missing product id value' });
    }
    const query = `
    UPDATE shopMetaData
    SET log_clicks = log_clicks + 1
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [productId]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({
      message: "Product created successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update product: Internal Server Error");
   }
  
});

//all products
app.get("/products", async (req, res) => {
  try {
    let product_name, log_clicks, log_date;
    const values = [product_name, log_clicks, log_date];
    const result = await pool.query("SELECT * FROM shopmetadata");
    //res.json(result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Cant Get all: Internal Server Error");
  }
});

//create new shop metadata
app.post("/products", async (req, res) => {
  try {
    const { product_name, log_clicks, log_date } = req.body;
    const values = [product_name, log_clicks, log_date];

    if (!product_name || !log_clicks) {
      return res.status(400).json({ error: "Missing required fields" });
    }
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
  console.log("Server is running on port 5000 http://localhost:5000");
});
