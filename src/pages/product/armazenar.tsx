import React, { useState } from 'react';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="app">
      <h1>Minha Loja</h1>

      {/* Componente de Carrinho */}
      <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />

      {/* Lista de Produtos */}
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    return (
      <div>
        <ProductPage product={yourProductData} onAddToCart={addToCart} />
        <Cart cartItems={cart} onRemoveFromCart={undefined} />
      </div>
    );
  }

export default App;