import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { Fragment, useState } from "react"

const DropdownMenu = ({ open, setOpen }) => {

  const handleClick = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  return (
    <Fragment>
      <button onClick={(e) => handleClick(e)} className="inline-flex w-full justify-center items-center rounded-md bg-black bg-opacity-20 px-2 py-1 text-xs uppercase font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        menu
        <ChevronDownIcon
          className={`${open && "rotate-180"} ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100`}
          aria-hidden="false"
        />
      </button>
      <ul  onClick={(e) => e.stopPropagation()} className={`absolute z-[-1] left-0 right-0 ${open ? "top-[50px]" : "top-[-100px]"}
      w-full transition-all ease-in duration-400 bg-indigo-200`}
      >
        <li >
          <Link href="/">
            <a>
              home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>
              posts
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <a>
              contacts
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default DropdownMenu