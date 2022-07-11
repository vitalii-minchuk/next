import { Fragment } from "react"

import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import Heading from "../../components/Heading"
import { ContactType } from "../../types"

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data }
  }
}

interface IContacts {
  contacts: ContactType[]
}

const Contacts: NextPage<IContacts> = ({ contacts }) => {

  return (
    <Fragment>
      <Head>
        <title>Contacts</title>
      </Head>
      <div className="">
        <div className="max-w-6xl mx-auto px-2">
          <Heading text="Contacts list:" />
          <ul>
            {contacts?.map(contact => (
              <li key={contact.id} className="text-center py-1">
                <Link href={`/contacts/${contact.id}`}>
                  <a>{contact.username}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Contacts

