import { FC, Fragment } from "react"
import Link from "next/link"

import Heading from "./Heading"
import { PostType } from "../types"

interface IPostInfo {
  post: PostType
}

const PostInfo: FC<IPostInfo> = ({ post }) => {

  if (!post) {
    return (
      <Fragment>
        <div className="relative">
          <Heading text="Empty post" />
          <Link href="/posts">
            <button className="absolute top-6 left-6 md:left-[30%] lg:left-[35%]
            whitespace-nowrap inline-flex justify-center items-center rounded-md
            bg-black bg-opacity-20 px-2 py-[6px] text-xs uppercase font-medium
            text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              go back
            </button>
          </Link>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Heading tag="h2" text="Contact info" />
      <div className="flex flex-col gap-3">
        <h4 className="">{post.title}</h4>
        <p className="text-sm">{post.body}</p>
      </div>
    </Fragment>
  )
}

export default PostInfo