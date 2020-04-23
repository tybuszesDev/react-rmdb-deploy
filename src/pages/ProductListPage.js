import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = [
  {
    id: 0,
    name: "car",
    price: "20000",
  },
  {
    id: 1,
    name: "motorcycle",
    price: "5000",
  },
  {
    id: 2,
    name: "klocki",
    price: "10",
  },
];

const ProductListPage = () => {
  const list = products.map((product) => (
    <li key={product.name}>
      <Link to={`/product/${product.name}`}>{product.name}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Lista Produktów</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
