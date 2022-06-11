import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomProduct, setRandomProduct] =useState('')

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);

    let newCart = [];
    if (cart.includes(product) === false) {
      newCart = [...cart, product];
    } else {
      newCart = cart;
    }
    setCart(newCart);
  };

  //Clear Product 
  const clearProduct = () => {
    setCart([]);
  }


  //Get random product from selected products

  const getRandomProduct = (cart) => {
    const randomProduct = cart[Math.floor( (Math.random() * cart.length))]
    setRandomProduct(randomProduct);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        randomProduct={randomProduct}
        getRandomProduct={getRandomProduct}
        clearProduct={clearProduct}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
