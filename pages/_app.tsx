import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/lib/apollo';
import { ProjectProvider } from '../context/ProjectProvider';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <ApolloProvider client={client}>
      <ProjectProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProjectProvider>
    </ApolloProvider>
  );
};

export default MyApp
