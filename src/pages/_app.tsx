import type { AppProps } from 'next/app';
import '../styles/globals.css';

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default Portfolio;
