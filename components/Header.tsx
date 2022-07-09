import Link from "next/link"
import Login from "./Login"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header>
      <div className="bg-gradient-to-br to-indigo-200 from-indigo-500">
        <div className="max-w-6xl mx-auto px-2">
          <div className="h-12 flex justify-between items-center">
            <Link href="/">
              <a>NEXT</a>
            </Link>
            <div className="flex gap-3 items-center">
              <Navbar />
              <Login />
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header