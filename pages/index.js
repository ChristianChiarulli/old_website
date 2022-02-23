import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'
import CategoryList from '@/components/CategoryList'
import SocialList from '@/components/SocialList'
import ProjectList from '@/components/ProjectList'

export default function HomePage({ posts }) {
  return (
    <Layout>
      <div className=' flex-col justify-between'>
        <div className='flex-col'>
          <div className='flex relative py-4 container mx-auto justify-start'>
            <div className='px-10 text-gray-200 w-56'>
              <div>
                <img
                  className='w-40 rounded-full'
                  src='/site/me.jpg'
                  alt='LunarVim'
                />
              </div>
            </div>
            <div>
              <p className='bg-gray-700 p-3 rounded-2xl text-gray-200 w-72'>
                Hey I'm Chris, This is where I keep all of my thoughts and links
                to everything I do on the internet.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div className='f9 flex-col'>
              <h1 className='text-xl pt-20 px-10 font-bold'>
                RECENTLY PUBLISHED
              </h1>
              <div className='flex w-full flex-col'>
                {posts.map((post, index) => (
                  <Post key={index} post={post} />
                ))}
              </div>
              <Link href='/blog'>
                <div className='px-8'>
                  <a className='block px-10 text-center cursor-pointer border font-bold border-gray-700 text-gray-200 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:shadow-outline w-full'>
                    All Posts
                  </a>
                </div>
              </Link>
            </div>
            <div className='flex-col'>
              <div className='flex-shrink-0 justify-end mx-1 my flex-col'>
                <CategoryList
                  title='FEATURED TOPICS'
                  categories={['Python', 'JavaScript', 'CSS']}
                />
                <SocialList />
                <ProjectList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 3),
    },
  }
}
