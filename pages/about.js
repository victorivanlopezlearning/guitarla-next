import Layout from "@/components/layout";
import Image from "next/image";
import styles from '@/styles/about.module.css';

export default function About() {
  return (
    <>
      <Layout
        title="Conoce la historia de GuitarLA"
        description="En GuitarLA, nos apasiona todo lo relacionado con las guitarras. Somos una tienda en línea especializada en la venta de guitarras de alta calidad, accesorios y equipos musicales."
      >
        <main className="container">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.content}>
            <Image className={styles.image} src="/img/about.jpg" width={1000} height={800} alt="Imagen Nosotros"/>

            <div className={styles.description}>
              <p>Donec consectetur enim quis sagittis volutpat. Duis ut nisl nec justo iaculis aliquam a at felis. Nullam lectus velit, sagittis vel pellentesque non, molestie in augue. In bibendum dui sed ante scelerisque faucibus. Nulla velit purus, rutrum vel felis nec, aliquam venenatis odio. Duis ut dignissim diam. Donec vel nunc velit.</p>
              <p>Donec consectetur enim quis sagittis volutpat. Duis ut nisl nec justo iaculis aliquam a at felis. Nullam lectus velit, sagittis vel pellentesque non, molestie in augue. In bibendum dui sed ante scelerisque faucibus. Nulla velit purus, rutrum vel felis nec, aliquam venenatis odio. Duis ut dignissim diam. Donec vel nunc velit.</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
