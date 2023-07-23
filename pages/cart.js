import Link from "next/link";
import Layout from "@/components/layout";
import CartItem from "@/components/cart-item";
import styles from '@/styles/cart.module.css';

export default function Cart({ cart, updateQuantity }) {
  return (
    <Layout
      title="Completa tu experiencia de compra de guitarras."
      description="Nuestro proceso de compra seguro y fácil de usar te permite revisar y ajustar tu selección antes de finalizar tu pedido. Asegúrate de tener todo lo necesario para llevar tu música al siguiente nivel mientras completas tu compra en el carrito de compras de GuitarLA."
    >
      <main className="cart container">
        <h1 className="heading">Carrito de Compras</h1>

        <div className={styles.content}>
          <div className={styles.items}>
            <h2>Artículos</h2>
            {cart?.length === 0 ? (
              <>
                <p>Carrito vacío. <Link className={`${styles['empty-link']}`} href={'/store'}>Ver Tienda</Link></p>
              </>

            ) : (
              cart?.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                />
              ))
            )}
          </div>

          <aside className={styles.resume}>
            <h2>Total del carrito</h2>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
