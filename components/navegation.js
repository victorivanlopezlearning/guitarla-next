import Link from 'next/link';

export default function Navegation({ section = 'header' }) {
  return (
    <nav className={`${section}-navigation`}>
      <Link
        className={`${section}-navigation__link`}
        href='/'
      >
        Inicio
      </Link>
      <Link
        className={`${section}-navigation__link`}
        href='/about'
      >
        Nosotros
      </Link>
      <Link
        className={`${section}-navigation__link`}
        href='/store'
      >
        Tienda
      </Link>
      <Link
        className={`${section}-navigation__link`}
        href='/blog'
      >
        Blog
      </Link>
    </nav>
  )
}
