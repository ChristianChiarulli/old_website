import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
// import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'
import styles from '@/styles/blog/slug.module.css'
import markdownStyles from '@/styles/blog/markdown.module.css'

// TODO: style this markdown

export default function PostPage({
  frontmatter: { title, topic, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <div className={styles.article}>
        <div className={styles.article__container}>
          <h1 className={styles.article__title}>{title}</h1>
        </div>
        <img src={cover_image} alt='' className={styles.cover__image} />

        {/* <div className='flex text-gray-300 justify-between items-center bg-dark p-2 my-8'> */}
        {/* <div className='flex items-center'> */}
        {/* <img */}
        {/*   src={author_image} */}
        {/*   alt='' */}
        {/*   className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block' */}
        {/* /> */}
        {/* <h4>{author}</h4> */}
        {/* </div> */}
        {/* </div> */}

        <div className={markdownStyles.markdown__body}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <div className={styles.footer}>
          <div className='date'>{date}</div>
          <CategoryLabel>{topic}</CategoryLabel>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  let paths = []
  let category

  files.forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    paths.push({
      params: {
        category: frontmatter.topic,
        slug: filename.replace('.md', ''),
      },
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', params.slug + '.md'),
    'utf-8'
  )

  const slug = params.slug

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
