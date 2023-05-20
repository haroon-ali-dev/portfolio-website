import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

export default function Home({ portfolioData }) {
  return (
    <>
      <Head>
        <title>Haroon Ali - Full Stack Developer</title>
      </Head>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio portfolioData={portfolioData} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const results = await fetch("http://127.0.0.1:1337/api/portfolio-items?populate=*");
  const portfolioData = await results.json();

  return {
      props: { portfolioData },
  };
}