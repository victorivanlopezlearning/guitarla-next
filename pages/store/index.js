import Layout from "@/components/layout";
import ListGuitars from "@/components/list-guitars";

export async function getServerSideProps() {

  const url = `${process.env.API_URL}/guitars/?populate=image`;

  const response = await fetch(url);
  const { data: guitars } = await response.json();

  return {
    props: {
      guitars,
    },
  }
}

export default function Index({ guitars }) {

  return (
    <>
      <Layout
        title="Explora nuestra tienda en línea: Guitarras de calidad"
        description="Descubre la mejor selección de marcas reconocidas y sumérgete en un mundo de posibilidades musicales. Nuestro objetivo es proporcionarte una experiencia de compra excepcional, con opciones para todos los niveles de habilidad y estilos musicales."
      >
        <main className="container">
          <h1 className="heading">Nuestra Colección</h1>

          <ListGuitars 
            guitars={guitars}
          />
        </main>
      </Layout>
    </>
  )
}