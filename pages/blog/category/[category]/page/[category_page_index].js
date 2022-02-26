import fs from 'fs'
import path from 'path'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import CategoryList from '@/components/CategoryList'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import { POSTS_PER_PAGE } from '@/config/index'
import styles from '@/styles/blog/category/category_name.module.css'
import Pagination from '@/components/Pagination'

export default function CategoryBlogPage({
  posts,
  categoryName,
  numPages,
  currentPage,
  categories,
}) {
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

          <Pagination
            categoryName={categoryName}
            currentPage={currentPage}
            numPages={numPages}
          />
        </div>
        <div className={styles.sidebar__container}>
          <CategoryList title='ALL TOPICS' categories={categories} />
        </div>
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

    return frontmatter.topic.toLowerCase()
  })

  console.log(categories)

  // const paths = categories.map((category) => ({
  //   params: { category_name: category },
  // }))

  const uniqueCategories = [...new Set(categories)]

  console.log(uniqueCategories)

  let paths = []
  uniqueCategories.forEach((category) => {
    let posts_per_category = categories.filter(
      (per_category) => per_category === category
    ).length
    console.log(posts_per_category)
    const numPages = Math.ceil(posts_per_category / POSTS_PER_PAGE)
    for (let i = 1; i <= numPages; i++) {
      paths.push({
        params: { category: category, category_page_index: i.toString() },
      })
    }
  })

  console.log('paths', paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.category_page_index) || 1)

  console.log(page)

  const posts = getPosts()

  const files = fs.readdirSync(path.join('posts'))

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.topic)
  const uniqueCategories = [...new Set(categories)]

  const categoryName = params.category
  console.log(categoryName)
  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.topic.toLowerCase() === params.category
  )

  const numPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = categoryPosts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categoryName,
      categories: uniqueCategories,
    },
  }
}
