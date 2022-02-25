import styles from '@/styles/components/ProjectList.module.css'

export default function ProjectList() {
  return (
    <div className={styles.projectlist}>
      <h1 className={styles.projectlist__title}>PROJECTS</h1>
      <ul>
        <li>
          <a
            className={styles.projectlist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://www.lunarvim.org/'}
          >
            <img
              className={styles.projectlist__icon}
              src='/icons/lunarvim.png'
              alt='LunarVim'
            />
            <span className={styles.projectlist__name}>LunarVim</span>
          </a>
        </li>
        <li>
          <a
            className={styles.projectlist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={
              'https://www.youtube.com/watch?v=ctH-a-1eUME&list=PLhoH5vyxr6Qq41NFL4GvhFp-WLd5xzIzZ'
            }
          >
            <img
              className={styles.projectlist__icon}
              src='/icons/neovimN.png'
              alt='LunarVim'
            />
            <span className={styles.projectlist__name}>Neovim FS</span>
          </a>
        </li>
        <li>
          <a
            className={styles.projectlist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={
              'https://github.com/ChristianChiarulli/Bitcoin-FullNode-Setup'
            }
          >
            <img
              className={styles.projectlist__icon}
              src='/icons/bitcoin.png'
              alt='LunarVim'
            />
            <span className={styles.projectlist__name}>Full Node Setup</span>
          </a>
        </li>
        <li>
          <a
            className={styles.projectlist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={
              'https://www.youtube.com/watch?v=ZZ5C2CILYhQ&list=PLhoH5vyxr6QoyW97O28uheczR07q9-OSl'
            }
          >
            <img
              className={styles.projectlist__icon}
              src='/icons/crypto-zombie.png'
              alt='LunarVim'
            />
            <span className={styles.projectlist__name}>Crypto Zombies</span>
          </a>
        </li>
        <li>
          <a
            className={styles.projectlist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={
              'https://github.com/ChristianChiarulli/intro-fullstack-ethereum'
            }
          >
            <img
              className={styles.projectlist__icon}
              src='/icons/circle-eth.png'
              alt='LunarVim'
            />
            <span className={styles.projectlist__name}>FullStack ETH</span>
          </a>
        </li>
        <li>
          <a
            className={styles.projectlist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={'https://github.com/Mach-OS'}
          >
            <img
              className={styles.projectlist__icon}
              src='/icons/machos.png'
              alt='LunarVim'
            />
            <span className={styles.projectlist__name}>MachOS</span>
          </a>
        </li>
        {/* <li> */}
        {/*   <a */}
        {/*     className={styles.projectlist__item} */}
        {/*     target='_blank' */}
        {/*     rel='nofollow noopener noreferrer' */}
        {/*     href={'https://github.com/ChristianChiarulli/website'} */}
        {/*   > */}
        {/*     <img */}
        {/*       className={styles.projectlist__icon} */}
        {/*       src='/icons/chrisatmachine.png' */}
        {/*       alt='LunarVim' */}
        {/*     /> */}
        {/*     <span className={styles.projectlist__name}>Website</span> */}
        {/*   </a> */}
        {/* </li> */}
      </ul>
    </div>
  )
}
