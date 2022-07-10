import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { Fragment } from "react"
import Heading from "../../components/Heading"

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data }
  }
}

const Posts: NextPage = ({ posts }) => {
console.log(posts);

  return (
    <Fragment>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="">
        <div className="max-w-6xl mx-auto px-2">
          <Heading text="Posts" />
          <ul className="list-disc list-outside">
            {posts?.map(post => (
              <Link key={post.id}  href={`/posts/${post.id}`}>
                <li className="text-left py-1 mx-6 cursor-pointer">
                  {post.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>

  )
}

export default Posts