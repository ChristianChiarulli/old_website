import {
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaPatreon,
  FaTwitter,
} from 'react-icons/fa'

// TODO: maybe add rss, maybe remove linkedin
// TODO: refactor into smaller components

export default function SocialList() {
  return (
    <div className='ml-7 w-72'>
      <h1 className='text-xl mx-1 pt-5 pb-2 font-bold'>SOCIAL</h1>
      <ul className=''>
        {/* <a href='http://youtube.com'> */}
        {/*   <li className='p-2 cursor-pointer hover:text-indigo-300'>Youtube</li> */}
        {/* </a> */}
        {/* <a href='youtube.com'> */}
        {/*   <li className='text-lg text-indigo-300 p-2 cursor-pointer hover:text-indigo-300'> */}
        {/*     Twitter */}
        {/*   </li> */}
        {/* </a> */}

        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli'}
          >
            <div className='flex justify-start items-center'>
              <FaGithub
                color='#FFFFFF'
                // color='#f34f29'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-indigo-300'>
                Github
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli'}
          >
            <div className='flex justify-start items-center'>
              <FaYoutube
                color='#FE0000'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-indigo-300'>
                Youtube
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli'}
          >
            <div className='flex justify-start items-center'>
              <FaTwitter
                color='#1c9bf0'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-indigo-300'>
                Twitter
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli'}
          >
            <div className='flex justify-start items-center'>
              <FaDiscord
                color='#7289dc'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-indigo-300'>
                Discord
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli'}
          >
            <div className='flex justify-start items-center'>
              <FaPatreon
                color='#E8715C'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-indigo-300'>
                Patreon
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
