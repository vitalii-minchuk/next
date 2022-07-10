import { Fragment } from "react"
import Link from "next/link"

const Login = () => {
  return (
    <Fragment>
      <Link href="/123456789">
        <button className="whitespace-nowrap inline-flex w-full justify-center
        items-center rounded-md bg-black bg-opacity-20 px-2 py-[6px] text-xs uppercase
        font-medium text-white hover:bg-opacity-30 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          log in
        </button>
      </Link>
    </Fragment>
  )
}

export default Login