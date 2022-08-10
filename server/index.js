const express = require("express");
const app = express();

//const mysql = require("mysql");
const cors = require("cors");
db = require("./models/db");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "viper",
// });

app.use(express.json());
app.use(cors());

// -------------------- INSERT/ADD RAW MATERIAL ------------------------ //

app.post("/addRawMaterial", (req, res) => {
  const { id_raw_material } = req.body;
  const { name } = req.body;
  const { qtty } = req.body;

  let mysql =
    "INSERT INTO raw_material ( id_raw_material, name, qtty) VALUES (?, ?, ?)";
  db.query(mysql, [id_raw_material, name, qtty], (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
});

// -------------------- SELECT ALL RAW MATERIALS ------------------------ //

app.get("/getAllRawMaterials", (req, res) => {
  let mysql = "SELECT * FROM raw_material";
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
  const { id_raw_material, name, qtty } = req.body;

  let mysql =
    "UPDATE raw_material SET name = ?, qtty = ? WHERE id_raw_material = ?";
  db.query(mysql, [name, qtty, id_raw_material], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------- DELETE RAW MATERIAL BY [ID] ------------------------- //

app.delete("/deleteRawMaterial/:id_raw_material", (req, res) => {
  const { id_raw_material } = req.params;
  let mysql = "DELETE FROM raw_material WHERE id_raw_material = ?";
  db.query(mysql, id_raw_material, (err, result) => {
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
  const { id_product } = req.body;
  const { name } = req.body;
  const { price } = req.body;

  let mysql = "INSERT INTO product (id_product, name, price) VALUES (?, ?, ?)";
  db.query(mysql, [id_product, name, price], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// -------------------- SELECT ALL PRODUCTS ------------------------ //

app.get("/getAllProducts", (req, res) => {
  let mysql = "SELECT * FROM product";
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
  const { id_product } = req.body;
  const { name } = req.body;
  const { price } = req.body;
  let mysql = "UPDATE product SET name = ?, price = ? WHERE id_product = ?";
  db.query(mysql, [name, price, id_product], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------- DELETE PRODUCT BY [ID] ------------------------- //

app.delete("/deleteProduct/:id_product", (req, res) => {
  const { id_product } = req.params;
  let mysql = "DELETE FROM product WHERE id_product = ?";
  db.query(mysql, id_product, (err, result) => {
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
  const { id_product } = req.body;
  const { id_raw_material } = req.body;
  const { qtty } = req.body;

  let mysql =
    "INSERT INTO inventory ( id_product, id_raw_material, qtty) VALUES (?, ?, ?)";
  db.query(mysql, [id_product, id_raw_material, qtty], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/getAllInventory", (req, res) => {
  let mysql = `select p.name as 'product' , rm.name as 'raw material', i.qtty from inventory i
               inner join product p on i.id_product = p.id_product
               inner join raw_material rm on i.id_raw_material = rm.id_raw_material
              group by p.name, rm.name, i.qtty`;
  db.query(mysql, (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
});

/// ------------ SERVER ------------ ///

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
