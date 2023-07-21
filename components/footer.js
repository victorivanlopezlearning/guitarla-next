import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '@/styles/footer.module.css';

export default function Footer() {

  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <nav className={styles.navigation}>
          <Link
            className={`${styles.link} ${(router.pathname === '/') ? styles.active : ''}`}
            href='/'
          >
            Inicio
          </Link>
          <Link
            className={`${styles.link} ${(router.pathname === '/about') ? styles.active : ''}`}
            href='/about'
          >
            Nosotros
          </Link>
          <Link
            className={`${styles.link} ${(router.pathname === '/store' || router.pathname === '/store/guitars/[guitar]') ? styles.active : ''}`}
            href='/store'
          >
            Tienda
          </Link>
          <Link
            className={`${styles.link} ${(router.pathname === '/blog' || router.pathname === '/blog/[post]') ? styles.active : ''}`}
            href='/blog'
          >
            Blog
          </Link>
        </nav>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()}. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
