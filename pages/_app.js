import '../styles/globals.css';
import '../styles/utils.css';
import 'normalize.css/normalize.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
