import '../styles/globals.css'
import "swiper/css/bundle";
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        
        <title>ICT Academy | IFPR</title> 

      </Head>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
