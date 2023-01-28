import '@/styles/globals.css';
import Layout from '../components/Layout';



export default function MyApp({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


    