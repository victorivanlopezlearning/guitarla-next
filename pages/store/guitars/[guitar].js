import Layout from "@/components/layout";
import Image from "next/image";
import styles from '@/styles/guitar.module.css';

// export async function getServerSideProps({ params }) {
//   const url = `${process.env.API_URL}/guitars/?filters[url]=${params.guitar}&populate=image`;
//   const response = await fetch(url);
//   const { data: guitar } = await response.json();
//   return {
//     props: {
//       guitar,
//     }
//   }
// }

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/guitars`;
  const response = await fetch(url);
  const { data } = await response.json();

  const paths = data.map((guitar) => ({
    params: { guitar: guitar.attributes.url },
  }))
  return { paths, fallback: false } // fallback: false genera una ruta 404 si no existe una ruta indicada
}

export async function getStaticProps({ params }) {
  const url = `${process.env.API_URL}/guitars/?filters[url]=${params.guitar}&populate=image`;
  const response = await fetch(url);
  const { data: guitar } = await response.json();
  return {
    props: {
      guitar,
    }
  }
}

export default function Guitar({ guitar }) {
  const { name, description, price, image } = guitar[0].attributes;
  const imageURL = image.data.attributes.url;
  return (
    <>
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
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}