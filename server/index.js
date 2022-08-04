const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");
//const db  = require("./models/db");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "viper",
});

app.use(express.json());
app.use(cors());

// -------------------- INSERT/ADD RAW MATERIAL ------------------------ //

app.post("/addRawMaterial", (req, res) => {
  const { name } = req.body;
  const { qtty } = req.body;

  let mysql = "INSERT INTO raw_materials ( name, qtty) VALUES (?, ?)";
  db.query(mysql, [name, qtty], (err, result) => {
    res.send(result);
  });
});

// -------------------- SELECT ALL RAW MATERIALS ------------------------ //

app.get("/getAllRawMaterials", (req, res) => {
  let mysql = "SELECT * FROM raw_materials";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------- UPDATE RAW MATERIAL BY [ID] ------------------------- //

app.put("/updateRawMaterial", (req, res) => {
  const { id, name, qtty } = req.body;

  let mysql = "UPDATE raw_materials SET name = ?, qtty = ? WHERE id = ?";
  db.query(mysql, [name, qtty, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------- DELETE RAW MATERIAL BY [ID] ------------------------- //

app.delete("/deleteRawMaterial/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM raw_materials WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///
// ------------ PRODUCTS --------------- //
///

// -------------------- INSERT/ADD PRODUCT ------------------------ //

app.post("/addProduct", (req, res) => {
  const { name } = req.body;
  const { price } = req.body;

  let mysql = "INSERT INTO products ( name, price) VALUES (?, ?)";
  db.query(mysql, [name, price], (err, result) => {
    res.send(result);
  });
});

// -------------------- SELECT ALL PRODUCTS ------------------------ //

app.get("/getAllProducts", (req, res) => {
  let mysql = "SELECT * FROM products";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------- UPDATE PRODUCT BY [ID] ------------------------- //

app.put("/updateProduct", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { price } = req.body;
  let mysql = "UPDATE products SET name = ?, price = ? WHERE id = ?";
  db.query(mysql, [name, price, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------- DELETE PRODUCT BY [ID] ------------------------- //

app.delete("/deleteProduct/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM products WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

///
// ------------- INVENTORY ------------- //
///

app.post("/addInventory", (req, res) => {
  const { id_products } = req.body;
  const { id_raw_materials } = req.body;
  const { qtty } = req.body;

  let mysql =
    "INSERT INTO inventory ( id_products, id_raw_materials, qtty) VALUES (?, ?, ?)";
  db.query(mysql, [id_products, id_raw_materials, qtty], (err, result) => {
    res.send(result);
  });
});

/// ------------ SERVER ------------ ///

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
