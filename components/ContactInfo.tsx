import Link from "next/link"
import { FC, Fragment } from "react"
import Heading from "./Heading"



const ContactInfo: FC = ({ contact }) => {
console.log(contact);

  if (!contact) {
    return (
      <Fragment>
        <div className="relative">
          <Heading text="Empty contact" />
          <Link href="/contacts">
            <button className="absolute top-6 left-6 md:left-[30%] lg:left-[35%]  whitespace-nowrap inline-flex justify-center items-center rounded-md bg-black bg-opacity-20 px-2 py-[6px] text-xs uppercase font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
      <div>
        <h4 className="">{contact.name}</h4>
      </div>
    </Fragment>
  )
}

export default ContactInfo