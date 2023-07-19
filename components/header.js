import Link from 'next/link';
import Navegation from './navegation';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="header__content container">
        <div className='header__bar'>
          <Link href='/' >
            <Image className='header__logo' src="/img/logo.svg" alt="Logo GuitarLA" width={300} height={40} />
          </Link>

          <Navegation />
        </div>
      </div>
    </header>
  )
}
