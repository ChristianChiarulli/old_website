import Post from './Post'

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>

  return (
    <div className='absolute top-20 z-10 border-1 border-gray-700 bg-gray-700 text-gray-200 w-full rounded-2xl'>
      <div className='p-3'>
        <h2 className='text-2xl mb-3'>{results.length} Results</h2>
        {/* <div className='p-4'> */}
        {results.slice(0, 3).map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
        {/* </div> */}
      </div>
    </div>
  )
}
