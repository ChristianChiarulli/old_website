import styles from '@/styles/components/ProjectList.module.css'

const PROJECTS = [
  {
    title: "LunarVim",
    href: "https://www.lunarvim.org/",
    src: "/icons/lunarvim.png",
  },
  {
    title: "Zap",
    href: "https://www.zapzsh.org/",
    src: "/icons/zap.svg",
  },
  {
    title: "RaspiNode",
    href: "https://www.raspinode.org/",
    src: "/icons/raspinode.png",
  },
  {
    title: "Neovim FS",
    href: 'https://www.youtube.com/watch?v=ctH-a-1eUME&list=PLhoH5vyxr6Qq41NFL4GvhFp-WLd5xzIzZ',
    src: "/icons/neovimN.png",
  },
  {
    title: "Full Node Setup",
    href: "https://github.com/ChristianChiarulli/Bitcoin-FullNode-Setup",
    src: "/icons/bitcoin.png",
  },
  // {
  //   title: "Crypto Zombies",
  //   href: 'https://www.youtube.com/watch?v=ZZ5C2CILYhQ&list=PLhoH5vyxr6QoyW97O28uheczR07q9-OSl',
  //   src: "/icons/crypto-zombie.png",
  // },
  // {
  //   title: "FullStack ETH",
  //   href: 'https://github.com/ChristianChiarulli/intro-fullstack-ethereum',
  //   src: "/icons/circle-eth.png",
  // },
  // {
  //   title: "MachOS",
  //   href: 'https://github.com/Mach-OS',
  //   src: "/icons/machos.png",
  // },
  // {
  //   title: "Website",
  //   href: "https://github.com/ChristianChiarulli/website",
  //   src: "/icons/chrisatmachine.png",
  // }
]

export default function ProjectList() {
  return (
    <div className={styles.projectlist}>
      <h1 className={styles.projectlist__title}>PROJECTS</h1>
      <ul>
        {PROJECTS.map((project, idx) => (
        <li key={idx}>
          <a
            className={styles.projectlist__item}
            target='_blank'
            rel='nofollow noopener noreferrer'
            href={project.href}
          >
            <img
              className={styles.projectlist__icon}
              src={project.src}
              alt={project.alt}
            />
            <span className={styles.projectlist__name}>{project.title}</span>
          </a>
        </li>
        ))}
      </ul>
    </div>
  )
}
