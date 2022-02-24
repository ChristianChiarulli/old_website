import {
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaPatreon,
  FaTwitter,
} from 'react-icons/fa'
import styles from '@/styles/components/SocialList.module.css'

// TODO: maybe add rss

export default function SocialList() {
  return (
    <div className={styles.sociallist}>
      <h1 className={styles.sociallist__title}>SOCIAL</h1>
      <ul>
        <li>
          <a
            className={styles.sociallist__item}
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
            <span className={styles.sociallist__name}>Github</span>
          </a>
        </li>
        <li>
          <a
            className={styles.sociallist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://www.youtube.com/chrisatmachine'}
          >
            <FaYoutube
              color='#FE0000'
              size='30'
              style={{ marginRight: '.4rem' }}
            />
            <span className={styles.sociallist__name}>Youtube</span>
          </a>
        </li>
        <li>
          <a
            className={styles.sociallist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://twitter.com/chrisatmachine'}
          >
            <FaTwitter
              color='#1c9bf0'
              size='30'
              style={{ marginRight: '.4rem' }}
            />
            <span className={styles.sociallist__name}>Twitter</span>
          </a>
        </li>
        <li>
          <a
            className={styles.sociallist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://discord.gg/Xb9B4Ny'}
          >
            <FaDiscord
              color='#7289dc'
              size='30'
              style={{ marginRight: '.4rem' }}
            />
            <span className={styles.sociallist__name}>Discord</span>
          </a>
        </li>
        <li>
          <a
            className={styles.sociallist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://www.patreon.com/chrisatmachine'}
          >
            <FaPatreon
              color='#E8715C'
              size='30'
              style={{ marginRight: '.4rem' }}
            />
            <span className={styles.sociallist__name}>Patreon</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
