import Link from 'next/link';
import Navigation from './navigation';
import Image from 'next/image';
import styles from '@/styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="header__content container">
        <div className={styles.bar}>
          <Link href='/'>
            <Image className={styles.logo} src="/img/logo.svg" alt="Logo GuitarLA" width={300} height={40} priority={true} />
          </Link>

          <Navigation />
        </div>
      </div>
    </header>
  )
}