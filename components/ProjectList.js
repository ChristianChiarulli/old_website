export default function ProjectList() {
  return (
    <div className='ml-7 w-72'>
      <h1 className='text-xl mx-1 pt-5 pb-2 font-bold'>PROJECTS</h1>
      <ul>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://www.lunarvim.org/'}
          >
            <div className='flex justify-start items-center'>
              <img
                className='project-icon-sm'
                src='/icons/lunarvim.png'
                alt='LunarVim'
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-blue-200'>
                LunarVim
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://www.youtube.com/watch?v=ctH-a-1eUME&list=PLhoH5vyxr6Qq41NFL4GvhFp-WLd5xzIzZ'}
          >
            <div className='flex justify-start items-center'>
              <img
                className='project-icon-sm'
                src='/icons/neovimN.png'
                alt='LunarVim'
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-blue-200'>
                NvimFS
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli/Bitcoin-FullNode-Setup'}
          >
            <div className='flex justify-start items-center'>
              <img
                className='project-icon-sm'
                src='/icons/bitcoin.png'
                alt='LunarVim'
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-blue-200'>
                Full Node Setup
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://www.youtube.com/watch?v=ZZ5C2CILYhQ&list=PLhoH5vyxr6QoyW97O28uheczR07q9-OSl'}
          >
            <div className='flex justify-start items-center'>
              <img
                className='project-icon-sm'
                src='/icons/crypto-zombie.png'
                alt='LunarVim'
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-blue-200'>
                Crypto Zombies
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli/intro-fullstack-ethereum'}
          >
            <div className='flex justify-start items-center'>
              <img
                className='project-icon-sm'
                src='/icons/circle-eth.png'
                alt='LunarVim'
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-blue-200'>
                FullStack ETH
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/Mach-OS'}
          >
            <div className='flex justify-start items-center'>
              <img
                className='project-icon-sm'
                src='/icons/machos.png'
                alt='LunarVim'
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-blue-200'>
                MachOS
              </span>
            </div>
          </a>
        </li>
        <li>
          <a
            className='flex align-middle'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/ChristianChiarulli/website'}
          >
            <div className='flex justify-start items-center'>
              <img
                className='project-icon-sm'
                src='/icons/chrisatmachine.png'
                alt='LunarVim'
              />
              <span className='text-lg text-gray-300 p-2 cursor-pointer hover:text-blue-200'>
                Website
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
