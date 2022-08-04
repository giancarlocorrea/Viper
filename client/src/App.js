import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

import TableProduct from "./components/Product";
import TableRawMaterial from "./components/RawMaterial";
import Inventory from "./components/dialog/dlgInventory";

export default function App() {
  const [listRawMaterial, setListRawMaterial] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/getAllRawMaterials").then((response) => {
      setListRawMaterial(response.data);
    });

    Axios.get("http://localhost:3001/getAllProducts").then((response) => {
      setListProduct(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <TableProduct listProduct={listProduct} setListProduct={setListProduct} />
      <Inventory
        open={open}
        setOpen={setOpen}
        id_products={"4"}
        id_raw_materials={"14"}
        qtty={"15"}
        id={"11"}
      />
      <button
        className="register-button"
        onClick={() => {
          setOpen(true);
        }}
      >
        <p>-- Associate --</p> {}
      </button>
      <TableRawMaterial
        listRawMaterial={listRawMaterial}
        setListRawMaterial={setListRawMaterial}
      />
    </div>
  );
}
