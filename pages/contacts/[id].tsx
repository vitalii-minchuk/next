import Head from 'next/head'
import React, { Fragment } from 'react'
import ContactInfo from '../../components/ContactInfo'
import Heading from '../../components/Heading'

export const getServerSideProps = async (context) => {
  const { id } = context.params

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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

const Contact = ({ contact }) => {
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