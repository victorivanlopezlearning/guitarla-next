import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import ErrorMessage from "@/components/error-message";
import styles from '@/styles/guitar.module.css';

export async function getServerSideProps({ params }) {
  const url = `${process.env.API_URL}/guitars/?filters[url]=${params.guitar}&populate=image`;
  const response = await fetch(url);
  const { data: guitar } = await response.json();
  return {
    props: {
      guitar,
    }
  }
}

export default function Guitar({ guitar, addItemToCart }) {

  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { name, description, price, image } = guitar[0].attributes;
  const imageURL = image.data.attributes.url;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1) {
      setError(true);
      setShowCart(false);
      return;
    }
    setError(false);
    const guitarSelected = {
      id: guitar[0].id,
      name,
      price,
      quantity,
      imageURL,
    }
    addItemToCart(guitarSelected);
    setShowCart(true);
  }

  return (
    <Layout
      title={`${name}: La guitarra definitiva del rock alternativo`}
      description={`Descubre ${name}, una guitarra única diseñada para capturar el espíritu y la energía del grunge y el rock alternativo. Con un estilo inconfundible y un sonido potente.`}
    >
      <main className="container single">
        <div className={`${styles.content} ${styles.single}`}>
          <Image className={styles.image} src={imageURL} alt={`Guitarra ${name}`} width={300} height={500} />

          <div>
            <h1>{name}</h1>
            <p className={styles.text}>{description}</p>
            <p className={styles.price}>${price} MXN</p>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <label className={styles.label} htmlFor="qty">Cantidad:</label>
              <select
                className={`${styles.qty}`}
                id="qty"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                <option value="0">-- Elige una Cantidad --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input
                type="submit"
                className={styles.btn}
                value="Agregar al Carrito"
              />

              {error && <ErrorMessage message={'Debes seleccionar una cantidad'} />}
            </form>
            {showCart && <p className={styles.success}>Agregado correctamente: <Link className={`${styles['show-cart']}`} href={'/cart'}>Ver Carrito</Link></p>}
          </div>
        </div>
      </main>
    </Layout>
  )
}