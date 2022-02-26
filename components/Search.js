import { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchResults from './SearchResults'
import styles from '@/styles/components/Search.module.css'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false)

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

  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isSearchResultsOpen &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setIsSearchResultsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isSearchResultsOpen])

  return (
    <div className={styles.search__wrapper}>
      <div className={styles.search__container}>
        <div className={styles.search__input}>
          <form ref={ref}>
            <input
              type='search'
              onClick={() => setIsSearchResultsOpen(true)}
              name=''
              id=''
              className={styles.search__form}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search Posts...'
            />

            <FaSearch className={styles.search__icon} />
          </form>

          {isSearchResultsOpen && <SearchResults results={searchResults} />}
        </div>
      </div>
    </div>
  )
}
