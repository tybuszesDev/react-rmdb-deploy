import React, { Component } from "react";
import "../styles/PromoPage.css";

let promo = require("../data/promo.json");

class PromoPage extends Component {
  state = {};
  render() {
    const product = promo.map((product) => (
      <div className="promoWrapper">
        <div className="promoProduct">
          <div>{product.name}</div>
          <div>
            {product.price} / {product.unit}{" "}
          </div>
          <div>
            {product.amount} {product.unit}
          </div>
          <img src={product.pic} alt="Pic of product" />
        </div>
      </div>
    ));

    return (
      <>
        <div className="names">
          <div>Nazwa Produktu:</div>
          <div>Cena:</div>
          <div>Dostępność:</div>
          <div>Zdjęcie produktu:</div>
        </div>
        {product}
      </>
    );
  }
}

export default PromoPage;
