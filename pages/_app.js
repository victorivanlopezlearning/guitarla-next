import { useState } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    if (cart.some(itemState => itemState.id === item.id)) {
      const cartUpdated = cart.map(itemState => {
        if (itemState.id === item.id) {
          itemState.quantity = item.quantity;
        }
        return itemState;
      })
      setCart(cartUpdated);
    } else {
      setCart([...cart, item]);
    }
  }

  const updateQuantity = (itemToUpdate) => {
    const cartUpdated = cart.map(itemState => {
      if (itemState.id === itemToUpdate.id) {
        itemState.quantity = itemToUpdate.quantity;
      }
      return itemState;
    })
    setCart(cartUpdated);
  }

  const deleteItemToCart = (id) => {
    const cartUpdated = cart.filter(itemState => itemState.id !== id);
    setCart(cartUpdated);
  }

  return <Component {...pageProps}
    cart={cart}
    addItemToCart={addItemToCart}
    updateQuantity={updateQuantity}
    deleteItemToCart={deleteItemToCart}
  />
}
