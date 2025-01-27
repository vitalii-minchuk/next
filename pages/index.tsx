import { Fragment } from "react"

import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import Heading from "../components/Heading"
import Socials from "../components/Socials"
import { SocialsType } from "../types"
import NextImg from "../public/nextImg.jpg"

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`)
    const data = await response.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { socials: data }
    }
  } catch (error) {
    return {
      props: { socials: null }
    }
  }

}

interface IHome {
  socials: SocialsType[]
}

const Home: NextPage<IHome> = ({ socials }) => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className="">
        <div className="max-w-6xl mx-auto px-2">
          <Heading text="Hello" />
          <h4 className="text-lg my-3">Я Вован продаю круті вікна!!!</h4>
         
          </div>
        </div>
      </div>
      <Socials socials={socials} />
    </Fragment>
  )
}

export default Home
