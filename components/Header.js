import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/components/Header.module.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import SocialList from './SocialList'

// TODO: responsive hamburger menu

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  let menu

  if (showMenu) {
    menu = (
      <div className={styles.menu}>
        <div className={styles.close_menu__icon}>
          <AiOutlineClose size='30' onClick={() => setShowMenu(!showMenu)} />
        </div>
        <ul className={styles.menu__items}>
          <li>
            <Link href='/blog'>
              <a
                className={styles.menu__item}
                onClick={() => setShowMenu(!showMenu)}
              >
                Articles
              </a>
            </Link>
          </li>
          <li>
            <Link href='/donate'>
              <a className={styles.menu__item}>Donate</a>
            </Link>
          </li>
          {/* <li> */}
          {/*   <Link href='/contact'> */}
          {/*     <a className={styles.menu__item}>Contact</a> */}
          {/*   </Link> */}
          {/* </li> */}
        </ul>
        <SocialList iconsOnly />
      </div>
    )
  }

  return (
    <header className={styles.container}>
      <Link href='/'>
        <a className={styles.nav__logo}>
          <span className={styles.logo__title__blue}>[</span>
          <span className={styles.logo__title}>chris</span>
          <span className={styles.logo__title__red}>@</span>
          <span className={styles.logo__title}>machine</span>
          <span className={styles.logo__title__blue}>]</span>
        </a>
      </Link>

      <AiOutlineMenu
        size='30'
        className={styles.open_menu__icon}
        onClick={() => setShowMenu(!showMenu)}
      />
      {menu}

      {/*TODO: only show nav when bigger than 768px*/}

      {/* <div className='nav__wrapper'> */}
      <nav className={styles.nav}>
        <div className={styles.nav__items}>
          <Link href='/blog'>
            <a className={styles.nav__item}>Articles</a>
          </Link>
          <Link href='/donate'>
            <a className={styles.nav__item}>Donate</a>
          </Link>
          {/* <Link href='/contact'> */}
          {/*   <a className={styles.nav__item}>Contact</a> */}
          {/* </Link> */}
        </div>
      </nav>
      <div className={styles.nav__search}>
        <Search />
      </div>
      {/* </div> */}
    </header>
  )
}
