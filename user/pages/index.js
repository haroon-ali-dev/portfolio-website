import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Haroon Ali - Full Stack Developer</title>
      </Head>
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  )
}
