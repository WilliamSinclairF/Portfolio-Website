import '../styles/globals.css';
import '../styles/utils.css';
import 'normalize.css/normalize.css';
import Head from 'next/head';
import Theme from '../styles/theme';

function App({ Component, pageProps }) {
  return (
    <Theme>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Theme>
  );
}

export default App;
