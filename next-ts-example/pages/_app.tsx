import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
// tailwind components
import '../styles/globals.css';
import { TailwindStyledProvider } from "@windboxes/core";
import twCssModule from '../styles/tailwind.module.css';




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <TailwindStyledProvider tailwind={twCssModule}>
        <Component {...pageProps} />
      </TailwindStyledProvider>
    </React.Fragment>
  );
}



export default MyApp;