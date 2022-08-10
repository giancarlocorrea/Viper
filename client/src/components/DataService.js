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

  createProduct: (id, name, price) => {
    return axiosInstance.post("/addProduct", {
      id,
      name: name,
      price: price,
    });
  },

  updateProduct: (id, name, price) => {
    return axiosInstance.put("/updateProduct", {
      id,
      name: name,
      price: price,
    });
  },

  deleteProduct: (id) => {
    return axiosInstance.delete(`/deleteProduct/${id}`, {
      id,
    });
  },

  ///
  //---------------- RAW MATERIAL ----------------- //
  ///

  getAllRawMaterials: () => {
    return axiosInstance.get("/getAllRawMaterials");
  },

  createRawMaterial: (id, name, qtty) => {
    return axiosInstance.post("/addRawMaterial", {
      id,
      name: name,
      qtty: qtty,
    });
  },

  updateRawMaterial: (id, name, qtty) => {
    return axiosInstance.put("/updateRawMaterial", {
      id,
      name: name,
      qtty: qtty,
    });
  },

  deleteRawMaterial: (id) => {
    return axiosInstance.delete(`/deleteRawMaterial/${id}`, {
      id,
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
      id_product: id_product,
      id_raw_material: id_raw_material,
      qtty: qtty,
    });
  },
};
