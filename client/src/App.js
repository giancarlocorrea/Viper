import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

import TableProduct from "./components/Product";
import TableRawMaterial from "./components/RawMaterial";
import Inventory from "./components/dialog/dlgInventory";

export default function App() {
  //states for listing tables
  const [listRawMaterial, setListRawMaterial] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  const [open, setOpen] = useState(false);

  //states for selected items
  const [selectedRawMaterial, setSelectedRawMaterial] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

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
      <TableProduct
        listProduct={listProduct}
        setListProduct={setListProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <Inventory
        open={open}
        setOpen={setOpen}
        selectedProduct={selectedProduct}
        selectedRawMaterial={selectedRawMaterial}
      />
      <button
        className="register-button"
        disabled={
          selectedProduct.length === 0 || selectedRawMaterial.length === 0
        }
        onClick={() => {
          setOpen(true);
        }}
      >
        -- Associate --
      </button>
      <TableRawMaterial
        listRawMaterial={listRawMaterial}
        setListRawMaterial={setListRawMaterial}
        setSelectedRawMaterial={setSelectedRawMaterial}
      />
    </div>
  );
}
