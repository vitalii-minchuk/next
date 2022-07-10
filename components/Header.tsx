import { Dispatch, FC, SetStateAction } from "react"
import Link from "next/link"

import DropdownMenu from "./DropdownMenu"
import Login from "./Login"
import Navbar from "./Navbar"

export const navigation = [
  {id: 1, title: "home", path: "/"},
  {id: 2, title: "posts", path: "/posts"},
  {id: 3, title: "contacts", path: "/contacts"}
]

interface IHeader {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Header: FC<IHeader> = ({ open, setOpen }) => {
  return (
    <header>
      <div className="bg-gradient-to-br to-indigo-200 from-indigo-500">
        <div className="max-w-6xl mx-auto px-2">
          <div className="h-12 flex justify-between items-center">
            <Link href="/">
              <a className="text-base font-bold text-slate-50 tracking-widest md:text-xl">
                NEXT
              </a>
            </Link>
            <div className="flex gap-3 items-center">
              <Navbar navigation={navigation} />
              <DropdownMenu navigation={navigation} open={open} setOpen={setOpen} />
              <Login />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header