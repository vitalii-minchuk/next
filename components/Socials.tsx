
import { FC, Fragment } from "react"

// export const getStaticProps = async () => {
//   const response = await fetch(`${process.env.API_HOST}/socials/`)
//   const data = await response.json()
// console.log(data)
//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { socials: data }
//   }
// }

const Socials: FC = ({ socials }) => {
console.log(socials)  
  if (!socials) {
    return null
  }

  return (
    <Fragment>
      <div>
        <ul className="flex justify-center gap-3 items-center py-3 w-full">
          {socials && socials.map(({ id, icon, path }) => (
            <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer" className="w-8 h-6 rounded-md
            grid place-items-center transition-all duration-200 hover:bg-indigo-400 hover:opacity-75 "
            >
              <i className={`fab fa-${icon}`} aria-hidden="true" />
            </a>
          </li>
          ))}
        </ul>
      </div>
    </Fragment>
  )
}

export default Socials