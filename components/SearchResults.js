import Post from './Post'
import styles from '@/styles/components/SearchResults.module.css'

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>

  return (
    <div className={styles.searchresults}>
      <h2 className={styles.searchresults__count}>{results.length} Results</h2>
      <div className={styles.searchresults__container}>
        <div className={styles.posts}>
          {results.map((result, index) => (
            <Post dropdown={true} key={index} post={result} compact={true} />
          ))}
        </div>
      </div>
    </div>
  )
}
// {results.slice(0, 6).map((result, index) => (
