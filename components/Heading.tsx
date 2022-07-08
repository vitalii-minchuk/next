import { FC } from "react"

type HeadingProps = {
  text: string
  tag?: keyof JSX.IntrinsicElements
}

const Heading: FC<HeadingProps> = ({ tag, text }) => {
  const Tag = tag || "h1"
  return (
    <h1>{text}</h1>
  )
}

export default Heading