import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.notfound__container}>
        <Image
          src='/icons/chrisatmachine.png'
          width={70}
          height={70}
          className={styles.notfound__image}
        />
        <h1 className={styles.notfound__title}>404 Not Found</h1>
        <h2 className={styles.notfound__message}>This page does not exist</h2>
      </div>
    </Layout>
  )
}
