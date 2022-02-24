import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'
import CategoryList from '@/components/CategoryList'
import SocialList from '@/components/SocialList'
import ProjectList from '@/components/ProjectList'
import styles from '@/styles/home.module.css'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <div className={styles.home__container}>
        <div className={styles.test}>
          <div className={styles.home__image__container}>
            <img
              className={styles.home__image}
              src='/site/me.jpg'
              alt='LunarVim'
            />
            <div>
              <p className={styles.home__intro}>
                Hey I'm Chris, This is where I keep all of my thoughts and links
                to everything I do on the internet.
              </p>
            </div>
          </div>
          <div className={styles.home__post__container}>
            <div>
              <h1 className={styles.home__post__title}>RECENTLY PUBLISHED</h1>
              <div className={styles.home__post__list}>
                {posts.map((post, index) => (
                  <Post key={index} post={post} />
                ))}
              </div>
              <Link href='/blog'>
                <div className={styles.home__post__button__wrapper}>
                  <a className={styles.home__post__button}>All Posts</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.home__sidebar__container}>
          <CategoryList
            title='FEATURED TOPICS'
            categories={['Bitcoin', 'Ethereum', 'Linux', 'Neovim']}
          />
          <SocialList />
          <ProjectList />
        </div>
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
