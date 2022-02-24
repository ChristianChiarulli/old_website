import fs from 'fs'
import path from 'path'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import CategoryList from '@/components/CategoryList'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import styles from '@/styles/category/category_name.module.css'

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className={styles.categorypage}>
        <div className={styles.categorypage__container}>
          <h1 className={styles.categorypage__title}>
            Posts in {categoryName}
          </h1>

          <div className={styles.categorypage__posts}>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
        {/* TODO: improve all topics section*/}
        {/* TODO: add pagination*/}
        {/* <div className='flex-col'> */}
        {/* <div className='flex-wrap flex-shrink-0 justify-end mx-1 my flex-col'> */}
        <CategoryList title='ALL TOPICS' categories={categories} />
        {/* </div> */}
        {/* </div> */}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  }
}
