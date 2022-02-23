import Link from 'next/link'
import styles from '@/styles/components/CategoryList.module.css'

export default function CategoryList({ title, categories }) {
  return (
    <div className={styles.list}>
      <h1 className={styles.list__title}>{title}</h1>
      <div className={styles.list__container}>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <div className={styles.list__element}>{category}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
