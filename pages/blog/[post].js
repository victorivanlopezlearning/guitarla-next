import Image from "next/image";
import Layout from "@/components/layout";
import { formatDate } from "@/utils";
import styles from '@/styles/post.module.css';

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/posts`;
  const response = await fetch(url);
  const { data } = await response.json();

  const paths = data.map((post) => ({
    params: { post: post.attributes.url },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const url = `${process.env.API_URL}/posts/?filters[url]=${params.post}&populate=image`;
  const response = await fetch(url);
  const { data: post } = await response.json();
  return {
    props: {
      post,
    }
  }
}

export default function Post({ post }) {
  const { title, content, image, publishedAt } = post[0].attributes;

  const imageURL = image.data.attributes.url;
  const date = formatDate(publishedAt);

  return (
    <Layout
      title={`${title}: Guías completas para principiantes`}
      description={`Nuestras guías completas están diseñadas especialmente para principiantes. Aumenta tu conocimiento y confianza en el mundo de las guitarras con ${title}`}
    >
      <div className="container single">
        <h1 className="heading">{title}</h1>

        <article>
          <Image className={styles.image} src={imageURL} alt={`Imagen portada ${title}`} width={800} height={600} />

          <div className={styles.content}>
            <p className={styles.meta}>{date}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </article>
      </div>

    </Layout>
  )
}
