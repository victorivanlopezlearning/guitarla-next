import Layout from "@/components/layout";
import ListPosts from "@/components/list-posts";

export async function getStaticProps() {

  const url = `${process.env.API_URL}/posts/?populate=image`;

  const response = await fetch(url);
  const { data: posts } = await response.json();

  return {
    props: {
      posts,
    },
  }
}

export default function Index({posts}) {
  
  return (
    <>
      <Layout
        title="Blog: consejos, tutoriales y las últimas noticias"
        description="Sumérgete en el apasionante mundo de las guitarras con el blog de GuitarLA. Encuentra consejos útiles, tutoriales detallados y las últimas noticias relacionadas con el mundo de la música y las guitarras."
      >
        <main className="container">
          <h1 className='heading'>Nuestro Blog</h1>

          <ListPosts 
            posts={posts}
          />
        </main>
      </Layout>
    </>
  )
}