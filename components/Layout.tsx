import { FC, Fragment, ReactNode, useState } from "react"
import Head from "next/head"

import Footer from "./Footer"
import Header from "./Header"

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children}) => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false)

  return (
    <Fragment>
          <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          </Head>
      <div onClick={() => setIsDropDownMenuOpen(false)} className="flex flex-col
      min-h-screen bg-gradient-to-tr from-indigo-900 to-indigo-200"
      >
        <div className="relative z-30">
          <Header open={isDropDownMenuOpen} setOpen={setIsDropDownMenuOpen} />
        </div>
        <div className="grow">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default Layout