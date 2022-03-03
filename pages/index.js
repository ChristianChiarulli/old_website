import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'
import CategoryList from '@/components/CategoryList'
import SocialList from '@/components/SocialList'
import ProjectList from '@/components/ProjectList'
import styles from '@/styles/home.module.css'
import Search from '@/components/Search'
import { FaDiscord, FaGithub, FaHeart, FaPatreon, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.test}>
          <div className={styles.introcard}>
            <img
              className={styles.intro__image}
              src='/site/me.jpg'
              alt='LunarVim'
            />
            <p className={styles.intro__message}>
              I'm Chris, this is where I keep all of my thoughts and links to
              everything I do on the internet.
            </p>
          </div>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.posts__container}>
            <h1 className={styles.posts__title}>RECENTLY PUBLISHED</h1>
            <div className={styles.posts}>
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
            <Link href='/blog'>
              <a className={styles.home__post__button}>All Posts</a>
            </Link>
          </div>
        </div>
        <div className={styles.home__sidebar__container}>
          <CategoryList
            title='FEATURED TOPICS'
            categories={['Bitcoin', 'Ethereum', 'Linux', 'Neovim', 'DWM']}
          />
          <SocialList />
          <ProjectList />
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.socials}>
          <li>
            <a
              className={styles.social__item}
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
              className={styles.social__item}
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
              className={styles.social__item}
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
              className={styles.social__item}
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
              className={styles.social__item}
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
              className={styles.social__item}
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
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 3),
    },
  }
}
