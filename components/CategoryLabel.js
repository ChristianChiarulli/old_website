import Link from 'next/link'
import { COLOR_KEY } from '@/config/index'
import styles from '@/styles/components/CategoryLabel.module.css'

export default function CategoryLabel({ children }) {
  // TODO: refactor to use colors without tailwind

  let colorKey = 'gray'

  if (COLOR_KEY[children] !== undefined) {
    colorKey = COLOR_KEY[children]
  }

  if (children === undefined) {
    children = 'no topic'
  }

  return (
    <div className={styles.label} style={{ background: colorKey }}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
