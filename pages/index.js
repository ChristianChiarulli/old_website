import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'
import CategoryList from '@/components/CategoryList'
import SocialList from '@/components/SocialList'
import ProjectList from '@/components/ProjectList'
import styles from '@/styles/home.module.css'
import Search from '@/components/Search'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.test}>
          {/* <div className={styles.introcard}> */}
          {/*   <img */}
          {/*     className={styles.intro__image} */}
          {/*     src='/site/me.jpg' */}
          {/*     alt='LunarVim' */}
          {/*   /> */}
          {/*   <p className={styles.intro__message}> */}
          {/*     I'm Chris, this is where I keep all of my thoughts and links to */}
          {/*     everything I do on the internet. */}
          {/*   </p> */}
          {/* </div> */}
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
        <SocialList iconsOnly />
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
