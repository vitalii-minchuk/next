import { Fragment } from "react"

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Head from "next/head"

import PostInfo from "../../components/PostInfo"
import { PostType } from "../../types"

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data: PostType[] = await response.json()

  const paths = data?.map(({ id }) => ({
    params: {id: id.toString()},
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data }
  }
}

interface IPost {
  post: PostType
}

const Post: NextPage<IPost> = ({ post }) => {

  return (
    <Fragment>
      <Head>
        <title>Post</title>
      </Head>
      <div className="max-w-6xl mx-auto px-2">
        <PostInfo post={post} />
      </div>
    </Fragment>
  )
}

export default Post