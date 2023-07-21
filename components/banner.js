import styles from '@/styles/banner.module.css';

export default function Banner({ banner }) {

  const { title, content, image } = banner;
  const imageURL = image?.data?.attributes?.url;

  return (
    <section className={`${styles.banner} banner`}>
      <style jsx="true">{`
        .banner {
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .65)), url(${imageURL});
        }
      `}</style>
      <div className={`${styles.grid} container`}>
        <div className={styles.content}>
          <h2 className="heading">{title}</h2>
          <p className={styles.text}>{content}</p>
        </div>
      </div>
    </section>
  )
}
