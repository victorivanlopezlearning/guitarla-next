import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/guitar.module.css';

export default function Guitar({ guitar }) {
  const { name, price, description, image, url } = guitar;
  const imageURL = image.data.attributes.formats.small.url;

  return (
    <div className={styles.content}>
      <Image src={imageURL} alt={`Imagen guitarra ${name}`} width={300} height={500} />

      <div>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price} MXN</p>

        <Link
          className="btn-link"
          href={`/store/guitars/${url}`}
        >
          Ver Producto
        </Link>
      </div>
    </div>
  )
}
