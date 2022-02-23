import Link from 'next/link'

export default function CategoryList({ title, categories }) {
  return (
    <div className='ml-7 w-72'>
      <h1 className='text-xl mx-1 pt-20 pb-2 font-bold'>{title}</h1>
      <div className='flex flex-wrap'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <div className='text-white text-sm px-2 py-2 mx-1 my-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-500'>
              {category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
