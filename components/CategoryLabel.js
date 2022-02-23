import Link from 'next/link'
import { COLOR_KEY } from '@/config/index'

export default function CategoryLabel({ children }) {
  // TODO: refactor to use colors without tailwind

  let colorKey = 'gray'

  if (COLOR_KEY[children] !== undefined) {
    colorKey = COLOR_KEY[children]
  }

  if (children === undefined) {
    children = 'no topic'
  }


  return (
    <div
      className={`text-xs px-2 py-1  bg-${colorKey}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
