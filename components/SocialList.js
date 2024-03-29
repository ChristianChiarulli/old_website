import {
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaPatreon,
  FaTwitter,
  FaHeart,
  FaTwitch,
  FaMedium,
} from "react-icons/fa";
import styles from "@/styles/components/SocialList.module.css";

// TODO: maybe add rss

const SOCIALS = [
  {
    title: "Github",
    href: "https://github.com/ChristianChiarulli",
    Icon: FaGithub,
    clr: "#FFFFFF",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@chrisatmachine",
    Icon: FaYoutube,
    clr: "#FE0000",
  },
  {
    title: "Twitch",
    href: "https://www.twitch.tv/chrisatmachine",
    Icon: FaTwitch,
    clr: "#6441A4",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/chrisatmachine",
    Icon: FaTwitter,
    clr: "#1c9bf0",
  },
  {
    title: "Discord",
    href: "https://discord.gg/machine-701530051140780102",
    Icon: FaDiscord,
    clr: "#7289dc",
  },
  {
    title: "Patreon",
    href: "https://www.patreon.com/chrisatmachine",
    Icon: FaPatreon,
    clr: "#E8715C",
  },
  {
    title: "Sponsor",
    href: "https://github.com/sponsors/ChristianChiarulli",
    Icon: FaHeart,
    clr: "#EB48AB",
  },
  {
    title: "Medium",
    href: "https://medium.com/@chris.machine",
    Icon: FaMedium,
    clr: "#FFFFFF",
  },
];

export default function SocialList({ iconsOnly = false }) {
  return (
    <div
      className={`${styles.sociallist} ${iconsOnly ? styles.iconsOnly : ""}`}
    >
      <h1 className={styles.sociallist__title}>SOCIAL</h1>
      <ul>
        {SOCIALS.map((social, idx) => (
          <li key={idx}>
            <a
              className={styles.sociallist__item}
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={social.href}
            >
              <social.Icon
                color={social.clr}
                size="30"
                style={{ marginRight: ".4rem" }}
              />
              <span className={styles.sociallist__name}>{social.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
