import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
// import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'

// TODO: style this markdown

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      {/* <Link href='/blog'>Go Back</Link> */}
      <div className=' w-full px-10 py-6 bg-dark rounded-lg mt-6 pb-32'>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-5xl mb-7'>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='' className='w-full rounded' />

        <div className='flex text-gray-300 justify-between items-center bg-dark p-2 my-8'>
          <div className='flex items-center'>
            {/* <img */}
            {/*   src={author_image} */}
            {/*   alt='' */}
            {/*   className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block' */}
            {/* /> */}
            {/* <h4>{author}</h4> */}
          </div>
        </div>

        <div className='blog-text mt-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <div className='date'>{date}</div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
