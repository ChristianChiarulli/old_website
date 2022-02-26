import Layout from '@/components/Layout'
import styles from '@/styles/donate.module.css'

export default function DonatePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Donate</h1>
        <div className={styles.card}>
          <div className={styles.item}>
            <p>
              Sponsor me on
              <a href='https://github.com/sponsors/ChristianChiarulli'>
                <span> Github</span>
              </a>
            </p>
          </div>
          <div className={styles.item}>
            <p>
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
              Send Money via
              <a
                target='_blank'
                rel='nofollow noopener noreferrer'
                href={'https://cash.app/$chrisatmachine'}
              >
                <span> CashApp</span>
              </a>
            </p>
          </div>
          <div className={styles.item}>
            <p>
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
        <div className={styles.card}>
          <p>Bitcoin</p>
          <p>Monero</p>
          <p>Ethereum</p>
        </div>
      </div>
    </Layout>
  )
}
