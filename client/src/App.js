import React, { useEffect, useState } from "react";
import "./App.css";

import { DataService } from "./components/DataService";

import TableProduct from "./components/Product";
import TableRawMaterial from "./components/RawMaterial";
import Inventory from "./components/dialog/dlgInventory";
import TableInventory from "./components/Inventory";

export default function App() {
  //states for listing tables
  const [listRawMaterial, setListRawMaterial] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [listInventory, setListInventory] = useState([]);

  const [open, setOpen] = useState(false);

  //states for selected items
  const [selectedRawMaterial, setSelectedRawMaterial] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    DataService.getAllRawMaterials()
      .then((response) => {
        setListRawMaterial(response.data);
      })
      .catch((error) => {
        console.log("ERRO  " + error);
      });

    DataService.getAllProducts()
      .then((response) => {
        setListProduct(response.data);
      })
      .catch((error) => {
        console.log("ERRO  " + error);
      });

    DataService.getAllInventory()
      .then((response) => {
        setListInventory(response.data);
      })
      .catch((error) => {
        console.log("ERRO  " + error);
      });
  }, []);

  return (
    <div className="app">
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
          listInventory={listInventory}
          setListInventory={setListInventory}
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
      <TableInventory
        listInventory={listInventory}
        setListInventory={setListInventory}
      />
    </div>
  );
}
