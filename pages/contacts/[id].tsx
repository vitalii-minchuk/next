import React, { Fragment } from "react"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import Head from "next/head"

import ContactInfo from "../../components/ContactInfo"
import { ContactType } from "../../types"

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params?.id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contact: data }
  }
}

interface IContact {
  contact: ContactType
}

const Contact: NextPage<IContact> = ({ contact }) => {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="max-w-6xl mx-auto px-2">
        <ContactInfo contact={contact} />
      </div>
    </Fragment>
  )
}

export default Contact