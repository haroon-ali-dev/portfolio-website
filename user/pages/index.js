import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Haroon Ali - Full Stack Developer</title>
      </Head>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
      </main>
    </>
  )
}
