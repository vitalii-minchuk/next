import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="hidden xs:block">
      <ul className="flex gap-2">
        <li>
          <Link href="/posts">
            <a>posts</a>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <a>contacts</a>
          </Link>
        </li>
        <li>about</li>
      </ul>
    </nav>
  )
}

export default Navbar