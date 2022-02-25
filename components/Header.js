import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/components/Header.module.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import {
  FaCross,
  FaDiscord,
  FaGithub,
  FaHeart,
  FaPatreon,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

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
          <li>
            <Link href='/contact'>
              <a className={styles.menu__item}>Contact</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.menu__socials}>
          <li>
            <a
              className={styles.menu__social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://github.com/ChristianChiarulli'}
            >
              <FaGithub
                color='#FFFFFF'
                // color='#f34f29'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.menu__social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://www.youtube.com/chrisatmachine'}
            >
              <FaYoutube
                color='#FE0000'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.menu__social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://twitter.com/chrisatmachine'}
            >
              <FaTwitter
                color='#1c9bf0'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.menu__social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://discord.gg/Xb9B4Ny'}
            >
              <FaDiscord
                color='#7289dc'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.menu__social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://www.patreon.com/chrisatmachine'}
            >
              <FaPatreon
                color='#E8715C'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.menu__social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://github.com/sponsors/ChristianChiarulli'}
            >
              <FaHeart
                color='#EB48AB'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
        </ul>
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
              <Link href='/contact'>
                <a className={styles.nav__item}>Contact</a>
              </Link>
            </div>
          </nav>
        <div className={styles.nav__search}>
          <Search />
        </div>
      {/* </div> */}
    </header>
  )
}
