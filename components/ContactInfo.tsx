import { FC, Fragment } from "react"
import Link from "next/link"

import { ContactType } from "../types"
import Heading from "./Heading"

interface IContactInfo {
  contact: ContactType
}

const ContactInfo: FC<IContactInfo> = ({ contact }) => {

  if (!contact) {
    return (
      <Fragment>
        <div className="relative">
          <Heading text="Empty contact" />
          <Link href="/contacts">
            <button className="absolute top-6 left-6 md:left-[30%] lg:left-[35%]
            whitespace-nowrap inline-flex justify-center items-center rounded-md
            bg-black bg-opacity-20 px-2 py-[6px] text-xs uppercase font-medium
            text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75"
            >
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
        <h4 className="text-lg font-semibold py-3">{contact.name}</h4>
      </div>
      <div className="mb-2">
        <strong>Email: </strong>
        {contact.email}
      </div>
      <div className="mb-2">
        <strong>Address: </strong>
        {`${contact.address.city}, ${contact.address.street},
        ${contact.address.suite}, ${contact.address.zipcode}`
        }
      </div>
      <div className="mb-2">
        <strong>Company: </strong>
        {`${contact.company.name}, ${contact.company.bs}, ${contact.company.catchPhrase}`}
      </div>
    </Fragment>
  )
}

export default ContactInfo