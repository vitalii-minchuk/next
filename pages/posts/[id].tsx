import { NextPage } from "next"
import Head from "next/head"
import { Fragment } from "react"
import PostInfo from "../../components/PostInfo"

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response.json()

  const paths = data?.map(({ id }) => ({
    params: {id: id.toString()},
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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


const Post: NextPage = ({ post }) => {
console.log(post)

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