import { FC, Fragment, ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col min-h-screen bg-gradient-to-tr from-indigo-900 to-indigo-200">
        <div className="">
          <Header />
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