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
      <Link href="/projects/quotes" passHref>
            <div className={styles.card}>
              <h2>Quote Machine &rarr;</h2>
              <p>Quote machine description</p>
            </div>
          </Link>

          <Link href="/projects/markdown-previewer" className={styles.card} passHref>
            <div className={styles.card}>
              <h2>Markdown Previewer &rarr;</h2>
              <p>Markdown previewer description</p>
            </div>
          </Link>

    </div>
    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/">placeholder</a>
      <footer className={styles.footer}>
        <a
          href="https://github.com/Danieda/Fcc-FrontEnd-js-ReactRedux-Certificate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </footer>
    </div>
  )
}
