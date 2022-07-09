import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
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
      </ul>
    </nav>
  )
}

export default Navbar