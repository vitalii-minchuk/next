import { NextPage } from "next"
import Head from "next/head"
import { Fragment } from "react"
import { text } from "stream/consumers"
import Heading from "../components/Heading"

const posts: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="">
        <div className="max-w-6xl mx-auto px-2">
          <Heading text="Posts" />
        </div>
      </div>
    </Fragment>

  )
}

export default posts