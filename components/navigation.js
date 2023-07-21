import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/header.module.css';

export default function Navigation() {

  const router = useRouter();

  return (
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
  )
}
