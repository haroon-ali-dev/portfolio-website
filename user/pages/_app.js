import '@/styles/globals.css'
import NavBar from '@/components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}
