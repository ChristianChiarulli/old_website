import Link from 'next/link'
import styles from '@/styles/components/Pagination.module.css'

export default function Pagination({ categoryName, currentPage, numPages }) {
  let isFirst
  let isLast
  let prevPage
  let nextPage

  if (categoryName === undefined) {
    isFirst = currentPage === 1
    isLast = currentPage === numPages
    prevPage = `/blog/page/${currentPage - 1}`
    nextPage = `/blog/page/${currentPage + 1}`
  } else {
    isFirst = currentPage === 1
    isLast = currentPage === numPages
    prevPage = `/blog/category/${categoryName}/page/${currentPage - 1}`
    nextPage = `/blog/category/${categoryName}/page/${currentPage + 1}`
  }

  if (numPages === 1) return <></>

  return (
    <ul className={styles.container}>
      {!isFirst && (
        <Link href={prevPage}>
          <li className={styles.page__prev}>Prev</li>
        </Link>
      )}
      {/* TODO: cut middle pagination and put ... in middle after unreasonable amount of numbers */}
      {/* {Array.from({ length: numPages }, (_, i) => ( */}
      {/*   <Link href={`/blog/page/${i + 1}`} key={`page-${i}`}> */}
      {/*     <li className={styles.page__number}> */}
      {/*       {i + 1} */}
      {/*     </li> */}
      {/*   </Link> */}
      {/* ))} */}

      {!isLast && (
        <Link href={nextPage}>
          <li className={styles.page__next}>Next</li>
        </Link>
      )}
    </ul>
  )
}
