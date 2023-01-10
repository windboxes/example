import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
// tailwind components
import '../styles/globals.css';
import { TailwindStyledProvider } from "@windboxes/react";
import twCssModule from '../styles/tailwind.module.css';




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>WindBoxes Next Typescript Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TailwindStyledProvider tailwind={twCssModule}>
        <Component {...pageProps} />
      </TailwindStyledProvider>
    </React.Fragment>
  );
}



export default MyApp;