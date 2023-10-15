import React from 'react';
import { useState } from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => onRemoveFromCart(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

function ProductPage({ product, onAddToCart }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}
