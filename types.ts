
export type ContactType = {
  id: number
  name: string
  username: string
  email: string
  phone: string
  address: AddressType
  company: CompanyType
}

export type AddressType = {
  city: string
  street: string
  suite: string
  zipcode: string
}

export type CompanyType = {
  name: string
  bs: string
  catchPhrase: string
}

export type PostType = {
  id: number
  body: string
  title: string
}

export type SocialsType = {
  id: number
  icon: string
  path: string
}