import Link from 'next/link'
// import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (
    <div className='post'>
      <Link href={`/blog/${post.slug}`}>
        <div>
          <div className='post-header'>
            <span className='date'>{post.frontmatter.date}</span>
            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </div>

          <div className='post-body'>
            <a>{post.frontmatter.title}</a>
            <p>{post.frontmatter.excerpt}</p>
          </div>
          {!compact && (
            <div className='post-readmore'>
              <Link href={`/blog/${post.slug}`}>
                <a>Read More</a>
              </Link>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
