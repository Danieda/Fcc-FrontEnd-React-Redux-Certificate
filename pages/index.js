import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import logo from '/public/logo.png'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Daneida FCC Certification Projects</title>
        <meta name="description" content="My Frontend Development Libraries Certification Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
          Welcome to myFrontend Development Libraries Certification Projects
        </h1>
      <main className={styles.container}>
     
        <img src="/logo.png" className={styles.Appheader} alt="logo"/>
        <Link href="/projects/quotes" passHref>
        <img src="/Quote.png" className={styles.box1} alt="QuoteBox"/>
        </Link>
        <div className={styles.box2} >box2 </div>
        <div className={styles.box3} >box3</div>
        <div className={styles.box4} >box4 </div>
        <div className={styles.box5} >box5</div>
 
      </main>
      <div className={styles.grid}>
      <Link href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate" passHref>
            <div className={styles.card}>
              <h2>My Github &rarr;</h2>
          
            </div>
          </Link>

          <Link href="https://scarletkeep.com/" className={styles.card} passHref>
            <div className={styles.card}>
              <h2>Our Website &rarr;</h2>
              <p> A indie game developer website</p>
            </div>
          </Link>

    </div>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Danieda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <hr/>
          Source Code
        </a>
      </footer>
    </div>
  )
}
