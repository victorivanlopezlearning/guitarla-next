import Layout from "@/components/layout";
import ListGuitars from "@/components/list-guitars";
import Banner from "@/components/banner";
import ListPosts from "@/components/list-posts";

export async function getServerSideProps() {

  const urlGuitars = `${process.env.API_URL}/guitars/?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts/?populate=image`;
  const urlBanner = `${process.env.API_URL}/banner?populate=image`;

  const [resGuitars, resPosts, resBanner] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlBanner),
  ])

  const [{ data: guitars }, { data: posts }, { data: banner }] = await Promise.all([
    resGuitars.json(),
    resPosts.json(),
    resBanner.json(),
  ])

  return {
    props: {
      guitars,
      posts,
      banner,
    },
  }
}

export default function Home({ guitars, posts, banner }) {

  return (
    <Layout
      title="Tu destino en línea para guitarras y accesorios de calidad."
      description="Bienvenido a GuitarLA, tu tienda en línea de confianza para todas tus necesidades relacionadas con las guitarras. Ofrecemos una amplia selección de guitarras de alta calidad, accesorios esenciales y equipos musicales de marcas reconocidas."
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>

        <ListGuitars
          guitars={guitars}
        />
      </main>

      <Banner
        banner={banner?.attributes}
      />

      <section className="container">
        <h2 className="heading">Nuestro Blog</h2>

        <ListPosts
          posts={posts}
        />
      </section>
    </Layout>
  )
}
