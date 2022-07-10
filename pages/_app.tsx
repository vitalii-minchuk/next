import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import Head from "next/head"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  ) 
}

export default MyApp
