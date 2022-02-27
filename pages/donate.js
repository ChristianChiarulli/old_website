import Layout from '@/components/Layout'
import styles from '@/styles/donate.module.css'
import { FaHeart, FaPatreon } from 'react-icons/fa'
import { ImPaypal } from 'react-icons/im'
import { IoLogoVenmo } from 'react-icons/io5'
import { SiCashapp } from 'react-icons/si'

export default function DonatePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Donate</h1>
        <div className={styles.card}>
          <div className={styles.item}>
            <p>
              <FaHeart
                color='#EB48AB'
                // color='#f34f29'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              Sponsor me on
              <a href='https://github.com/sponsors/ChristianChiarulli'>
                <span> Github</span>
              </a>
            </p>
          </div>
          <div className={styles.item}>
            <p>
              <ImPaypal
                color='#019DDE'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              Send Money via
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href={'https://paypal.me/chrisatmachine'}
              >
                <span> Paypal</span>
              </a>
            </p>
          </div>
          <div className={styles.item}>
            <p>
              <IoLogoVenmo
                color='#008DFE'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              Send Money via
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href={'https://account.venmo.com/u/Christian-Chiarulli'}
              >
                <span> Venmo</span>
              </a>
            </p>
          </div>
          <div className={styles.item}>
            <p>
              <SiCashapp
                color='#00D733'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              Send Money via
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href={'https://cash.app/$chrisatmachine'}
              >
                <span> Cash App</span>
              </a>
            </p>
          </div>
          <div className={styles.item}>
            <p>
              <FaPatreon
                color='#E8715C'
                // color='#f34f29'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
              Subscribe to my
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href={'https://www.patreon.com/chrisatmachine'}
              >
                <span> Patreon</span>
              </a>
            </p>
          </div>
        </div>
        {/* <div className={styles.card}> */}
        {/*   <p> */}
        {/*     <FaPatreon */}
        {/*       color='#E8715C' */}
        {/*       // color='#f34f29' */}
        {/*       size='30' */}
        {/*       style={{ marginRight: '.4rem' }} */}
        {/*     /> */}
        {/*     Bitcoin: bc1quk8yyegvgcc5m9gqwhqsc4e4wnrqwxxsck2zk4 */}
        {/*   </p> */}
        {/*   <p>Monero</p> */}
        {/*   <p>Ethereum: c763a82f81A0C5D525b1Af74A23E996751735307</p> */}
        {/* </div> */}
      </div>
    </Layout>
  )
}
