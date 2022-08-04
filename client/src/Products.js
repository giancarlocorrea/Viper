import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import CardProduct from "./components/cards/cardProduct";

export default function Products() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);

  console.log(listCard);

  const handleAdd = () => {
    Axios.post("http://localhost:3001/addProduct", {
      name: values.name,
      price: values.price,
    }); /*.then(() => {
      Axios.post("http://localhost:3001/search", {
        name: values.name,
        cost: values.cost,
        category: values.category,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            name: values.name,
            cost: values.cost,
            category: values.category,
          },
        ]);
      });
    });*/
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getAllProducts").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="app-container">
        <div className="register-container">
          <h1 className="register-title">Product</h1>

          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="register-input"
            onChange={handleaddValues}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            className="register-input"
            onChange={handleaddValues}
          />

          <button onClick={handleAdd} className="register-button">
            Cadastrar
          </button>
        </div>

        {listCard.map((val) => (
          <CardProduct
            listCard={listCard}
            setListCard={setListCard}
            key={val.id}
            id={val.id}
            name={val.name}
            price={val.price}
          />
        ))}
      </div>
    </div>
  );
}
