import { useEffect, useState } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  const cartLS = (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('cart')) ?? [] : [];
  const [cart, setCart] = useState(cartLS);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

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

  return (isAppReady) ? <Component {...pageProps}
    cart={cart}
    addItemToCart={addItemToCart}
    updateQuantity={updateQuantity}
    deleteItemToCart={deleteItemToCart}
  /> : null
}
