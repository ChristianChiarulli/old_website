import Link from 'next/link'

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  if (numPages === 1) return <></>

  return (
    <div className='mt-6'>
      <ul className='flex justify-start pl-0 list-none my-2'>
        {!isFirst && (
          <Link href={prevPage}>
            <li className='relative block py-2 px-3 leading-tight rounded-xl bg-indigo-600 border border-gray-800 text-gray-200 mr-1 hover:bg-indigo-500 cursor-pointer'>
              Previous
            </li>
          </Link>
        )}
        {/* TODO: cut middle pagination and put ... in middle after unreasonable amount of numbers */}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} key={`page-${i}`}>
            <li className='relative block py-2 px-3 leading-tight rounded-xl bg-indigo-600 border border-gray-800 text-gray-200 mr-1 hover:bg-indigo-500 cursor-pointer'>
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className='relative block py-2 px-3 leading-tight rounded-xl bg-indigo-600 border border-gray-800 text-gray-200 mr-1 hover:bg-indigo-500 cursor-pointer'>
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}
