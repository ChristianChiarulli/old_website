import Link from 'next/link'
import Search from './Search'

export default function Header() {
  return (
    <header className='bg-dark text-gray-100 w-full pt-7'>
      <div className='container mx-auto flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav className='flex flex-wrap justify-between text-base'>
          <div className='flex items-center justify-start'>
            <div>
              <Link href='/'>
                <a className=' md:w-1/5 title-font font-medium pr-6 mb-4 md:mb-0'>
                  {/* <Image src='/images/logo.png' width={40} height={40} alt='logo' /> */}
                  <span className='text-3xl text-blue-600'>[</span>
                  <span className='text-3xl'>chris</span>
                  <span className='text-3xl text-red-600'>@</span>
                  <span className='text-3xl'>machine</span>
                  <span className='text-3xl text-blue-600'>]</span>
                </a>
              </Link>
              <Link href='/blog'>
                <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
                  Articles
                </a>
              </Link>
                {/* TODO: donate page */}
              {/* <Link href='/donate'> */}
              {/*   <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'> */}
              {/*     Donate */}
              {/*   </a> */}
              {/* </Link> */}
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
          <Search />

          {/* <Search /> */}
        </nav>
      </div>
    </header>
  )
}
