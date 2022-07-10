import { FC, Fragment } from "react"
import Heading from "./Heading"

const ContactInfo: FC = ({ contact }) => {
  return (
    <Fragment>
      <Heading tag="h2" text="Contact info" />
    </Fragment>
  )
}

export default ContactInfo