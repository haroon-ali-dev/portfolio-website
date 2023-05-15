import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Haroon Ali - Full Stack Developer</title>
      </Head>
      <main>
        <section className={styles.hero}>
          <p className={styles.heading}>HAROON ALI</p>
          <p className={styles.subHeading}>FULL STACK DEVELOPER</p>
        </section>
      </main>
    </>
  )
}
