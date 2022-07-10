import { FC } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { navigation } from "./Header"

interface INavbar {
  navigation: typeof navigation
}

const Navbar: FC<INavbar> = ({ navigation }) => {
  const { pathname } = useRouter()

  return (
    <nav className="hidden xs:block">
      <ul className="flex gap-5 md:gap-10 md:pr-10">
        {navigation.map(link => (
          <li key={link.id}>
            <Link href={link.path}>
              <a className={`${pathname === link.path && "underline"}
              w-full underline-offset-4 hover:text-gray-200 transition-all duration-300`}>
                {link.title}
              </a>
            </Link>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar