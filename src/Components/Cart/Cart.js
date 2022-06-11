import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const {
    getRandomProduct, 
    randomProduct, 
    cart,
    clearProduct
  } = props;
  console.log(randomProduct);

  return (
    <div className="cart">
      <h2>Selected Bicycles </h2>

      {cart.map((product) => (
        <div className="displayCart">
          <div className="displayImage">
            <img src={product.img} alt="" />
          </div>
          <p>{product.name}</p>
        </div>
      ))}

      <div className="randomProduct">
        <h2>Random Product</h2>
        <input type="text" value={randomProduct.name} />
      </div>

      <button className="check-one" onClick={ () => getRandomProduct(cart)}>
        <p>CHOOSE ONE</p>
        <FontAwesomeIcon icon={faHandPointer} />
      </button>
      <br />
      <button className="check-again" onClick={ () => clearProduct(cart)}>
        <p>CHOOSE AGAIN</p>
        <FontAwesomeIcon icon={faCheckDouble} />
      </button>
    </div>
  );
};

export default Cart;
