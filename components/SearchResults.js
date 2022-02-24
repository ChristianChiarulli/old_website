import Post from './Post'
import styles from '@/styles/components/SearchResults.module.css'

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>

  return (
    <div className={styles.searchresults}>
      <div className={styles.searchresults__container}>
        <h2 className={styles.searchresults__count}>{results.length} Results</h2>
        {results.slice(0, 3).map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  )
}
