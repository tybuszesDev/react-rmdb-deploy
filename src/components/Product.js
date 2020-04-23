import React from "react";

const Product = (props) => {
  console.log(props);
  return (
    <article className="product">
      <h1>{props.id}</h1>
      <h2>{props.price}</h2>
    </article>
  );
};

export default Product;
