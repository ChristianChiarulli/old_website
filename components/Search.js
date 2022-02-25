import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchResults from './SearchResults'
import styles from '@/styles/components/Search.module.css'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await res.json()
        setSearchResults(results)
      }
    }

    getResults()
  }, [searchTerm])

  return (
    <div className={styles.search__wrapper}>
      <div className={styles.search__container}>
        <div className={styles.search__input}>
          <form>
            <input
              type='search'
              name=''
              id=''
              className={styles.search__form}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search Posts...'
            />

            <FaSearch className={styles.search__icon} />
          </form>
          <SearchResults results={searchResults} />
        </div>
      </div>
    </div>
  )
}
