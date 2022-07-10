import Link, { LinkProps } from "next/link"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { forwardRef, Fragment, HTMLProps } from "react"

const NextLink = forwardRef!<HTMLAnchorElement, LinkProps & HTMLProps<HTMLAnchorElement>  >(
  ({ href, children, ...rest }, ref) => {
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
  }
)

const DropdownMenu = () => {

  return (
    <div className="block xs:hidden">
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <Fragment>
            <Menu.Button as="button" className="inline-flex w-full justify-center items-center rounded-md bg-black bg-opacity-20 px-4 py-1 text-xs uppercase font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              menu
              <ChevronDownIcon
                  className={`${open && "rotate-180"} ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100`}
                  aria-hidden="true"
                />
            </Menu.Button>
            <Transition show={open}
              as={Fragment}
              enter="transition ease-out duration-400"
              enterFrom="transform opacity-0 scale-70"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-70"
            >
              <Menu.Items as="ul" static className="absolute -right-20 mt-2 w-56 origin-top-right rounded-md bg-indigo-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-2 py-2 divide-y divide-indigo-200">
                  <Menu.Item as="li">
                    {({ active }) => (
                        <NextLink href="/posts" as="button " className={`${
                          active ? "bg-indigo-400 text-white" : "text-gray-900"
                          } block rounded-md px-2 py-1 w-full text-base`}
                        >
                          posts
                        </NextLink>
                      )}
                  </Menu.Item>
                  <Menu.Item as="li">
                    {({ active }) => (
                      <NextLink href="/contacts" as="button " className={`${
                        active ? "bg-indigo-400 text-white" : "text-gray-900"
                        } block rounded-md px-2 py-1 w-full text-base`}
                      >
                        contacts
                      </NextLink>
                    )}
                  </Menu.Item>
                  <Menu.Item as="li" disabled>
                    {({ disabled }) => (
                      <a className={`${disabled && "opacity-50"} block rounded-md px-2 py-1 w-full text-base`}>
                        about
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}

      </Menu>
    </div>
  )
}

export default DropdownMenu