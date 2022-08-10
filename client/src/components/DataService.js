import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const DataService = {
  ///
  //---------------- PRODUCT ----------------- //
  ///

  getAllProducts: () => {
    return axiosInstance.get("/getAllProducts");
  },

  createProduct: (id_product, name, price) => {
    return axiosInstance.post("/addProduct", {
      id_product,
      name: name,
      price: price,
    });
  },

  updateProduct: (id_product, name, price) => {
    return axiosInstance.put("/updateProduct", {
      id_product,
      name: name,
      price: price,
    });
  },

  deleteProduct: (id_product) => {
    return axiosInstance.delete(`/deleteProduct/${id_product}`, {
      id_product,
    });
  },

  ///
  //---------------- RAW MATERIAL ----------------- //
  ///

  getAllRawMaterials: () => {
    return axiosInstance.get("/getAllRawMaterials");
  },

  createRawMaterial: (id_raw_material, name, qtty) => {
    return axiosInstance.post("/addRawMaterial", {
      id_raw_material,
      name,
      qtty,
    });
  },

  updateRawMaterial: (id_raw_material, name, qtty) => {
    return axiosInstance.put("/updateRawMaterial", {
      id_raw_material,
      name: name,
      qtty: qtty,
    });
  },

  deleteRawMaterial: (id_raw_material) => {
    return axiosInstance.delete(`/deleteRawMaterial/${id_raw_material}`, {
      id_raw_material,
    });
  },

  ///
  //---------------- INVENTORY ----------------- //
  ///

  getAllInventory: () => {
    return axiosInstance.get("/getAllInventory");
  },

  createInventory: (id_product, id_raw_material, qtty) => {
    return axiosInstance.post("/addInventory", {
      id_product,
      id_raw_material,
      qtty,
    });
  },
};
