import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/components/Header.module.css'

// TODO: responsive hamburger menu

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__items}>
          <Link href='/'>
            <a className={styles.nav__logo}>
              <span className={styles.nav__logo__title__blue}>[</span>
              <span className={styles.nav__logo__title}>chris</span>
              <span className={styles.nav__logo__title__red}>@</span>
              <span className={styles.nav__logo__title}>machine</span>
              <span className={styles.nav__logo__title__blue}>]</span>
            </a>
          </Link>
          <Link href='/blog'>
            <a className={styles.nav__item}>Articles</a>
          </Link>
          {/* TODO: donate page */}
          {/* TODO: contact page */}
          {/* <Link href='/donate'> */}
          {/*   <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'> */}
          {/*     Donate */}
          {/*   </a> */}
          {/* </Link> */}
        </div>
        <Search />
      </nav>
    </header>
  )
}
