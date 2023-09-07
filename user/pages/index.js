import Head from 'next/head'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'

import styles from '@/styles/Home.module.css'

export default function Home({ portfolioData, blogPostData }) {
  return (
    <>
      <Head>
        <title>Haroon Ali - Full Stack Developer</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </Head>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio portfolioData={portfolioData} />
        <Blog blogPostData={blogPostData} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  let results = await fetch(`${process.env.strapiHost}/api/portfolio-items?populate=*`);
  const portfolioData = await results.json();

  results = await fetch(`${process.env.strapiHost}/api/blog-posts?populate=*`);
  const blogPostData = await results.json();

  return {
      props: { portfolioData, blogPostData },
  };
}