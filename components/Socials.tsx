import { FC, Fragment } from "react"

import { SocialsType } from "../types"

interface ISocials {
  socials: SocialsType[]
}

const Socials: FC<ISocials> = ({ socials }) => {
  
  if (!socials) {
    return null
  }

  return (
    <Fragment>
      <div>
        <ul className="flex justify-center gap-3 items-center py-3 w-full">
          {socials && socials.map(({ id, icon, path }) => (
            <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer" className="w-8 h-6
            rounded-md grid place-items-center transition-all duration-200
            hover:bg-indigo-400 hover:opacity-75 "
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