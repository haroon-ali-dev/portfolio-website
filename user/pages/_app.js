import '@/styles/globals.css'
import { Montserrat } from "@next/font/google";
import NavBar from '@/components/NavBar';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "900"]
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </div>
  );
}
