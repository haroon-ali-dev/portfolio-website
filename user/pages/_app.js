import Head from 'next/head'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "900"]
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Head>
        <meta name="description" content="My portfolio website for full stack development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
