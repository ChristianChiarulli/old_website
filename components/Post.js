import Link from 'next/link'
import CategoryLabel from './CategoryLabel'
import styles from '@/styles/components/Post.module.css'

export default function Post({ dropdown, post, compact }) {
  let padding = '0rem'

  if (dropdown) {
    padding = '1.2rem'
  }

  return (
    <div className={styles.container}>
      <Link href={`/blog/${post.slug}`}>
        <div
          style={{ paddingLeft: padding, paddingRight: padding }}
          className={styles.item}
        >
          <div className={styles.header}>
            <span className='date'>{post.frontmatter.date}</span>
            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </div>
          <div className={styles.title}>
            <a>{post.frontmatter.title}</a>
          </div>
          {!compact && (
            <div>
              <div className={styles.body}>
                <p>{post.frontmatter.excerpt}</p>
              </div>
              <div className={styles.readmore}>
                <Link href={`/blog/${post.slug}`}>
                  <a>Read More</a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
