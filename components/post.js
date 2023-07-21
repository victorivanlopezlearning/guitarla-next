import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/post.module.css';
import { formatDate } from '@/utils';

export default function Post({ post }) {
  const { title, content, image, url, publishedAt } = post;
  const imageURL = image.data.attributes.formats.small.url;
  const date = formatDate(publishedAt);
  return (
    <article className="post">
      <Image className={styles.image} src={imageURL} alt={`Imagen portada ${title}`} width={500} height={400} />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.meta}>{date}</p>
        <p className={styles.extract}>{content}</p>
        <Link
          className="btn-link"
          href={`/blog/${url}`}
        >
          Leer Entrada
        </Link>
      </div>
    </article>
  )
}
