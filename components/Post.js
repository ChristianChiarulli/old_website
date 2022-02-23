import Link from 'next/link'
import CategoryLabel from './CategoryLabel'
import styles from '@/styles/components/Post.module.css'

export default function Post({ post, compact }) {
  return (
    <div className={styles.post}>
      <Link href={`/blog/${post.slug}`}>
        <div>
          <div className={styles.post__header}>
            <span className='date'>{post.frontmatter.date}</span>
            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </div>
          <div className={styles.post__body}>
            <a>{post.frontmatter.title}</a>
            <p>{post.frontmatter.excerpt}</p>
          </div>
          {!compact && (
            <div className={styles.post__readmore}>
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
