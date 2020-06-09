import { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/style.css';
import { ReactElement } from 'react';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
