import { FC, Fragment, ReactNode, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false)

  return (
    <Fragment>
      <div onClick={() => setIsDropDownMenuOpen(false)} className="flex flex-col min-h-screen bg-gradient-to-tr from-indigo-900 to-indigo-200">
        <div className="relative z-30">
          <Header open={isDropDownMenuOpen} setOpen={setIsDropDownMenuOpen} />
        </div>
        <div className="grow">
          {children}
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default Layout