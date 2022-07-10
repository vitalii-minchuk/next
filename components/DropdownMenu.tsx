import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { Dispatch, FC, Fragment, SetStateAction } from "react"
import { navigation } from "./Header"

interface IDropdownMenu {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  navigation: typeof navigation
}

const DropdownMenu: FC<IDropdownMenu> = ({ open, setOpen, navigation }) => {

  const handleClick = (e: any) => {
    e.stopPropagation()
    setOpen(!open)
  }
  return (
    <Fragment>
      <nav className="block xs:hidden">
        <button onClick={(e) => handleClick(e)} className="inline-flex w-full 
        justify-center items-center rounded-md bg-black bg-opacity-20 px-2 py-1 
        text-xs uppercase font-medium text-white hover:bg-opacity-30 focus:outline-none 
        focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          menu
          <ChevronDownIcon
            className={`${open && "rotate-180"} ml-2 -mr-1 h-5 w-5 text-violet-200 
            hover:text-violet-100`}
            aria-hidden="false"
          />
        </button>
        <ul  onClick={(e) => e.stopPropagation()} className={`absolute z-[-1] left-0 
        right-0 ${open ? "top-[50px]" : "top-[-100px]"} w-full divide-y 
        divide-indigo-300 transition-all ease-in duration-400 bg-indigo-200`}
        >
          {navigation.map(link => (
            <li key={link.id}>
              <Link href={link.path}>
                <a onClick={() => setOpen(false)} className="block w-[96%] text-center 
                mx-auto my-1 transition-all duration-300 rounded-md py-2 
                hover:text-white hover:bg-opacity-30 hover:bg-indigo-500"
                >
                  {link.title}
                </a>
              </Link>
            </li>
            ))
          }
        </ul>
      </nav>
    </Fragment>
  )
}

export default DropdownMenu