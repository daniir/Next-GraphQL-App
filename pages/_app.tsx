import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <ApolloProvider client={ client }>
      <Component {...pageProps} />
    </ApolloProvider>
  </Layout>
}

export default MyApp
