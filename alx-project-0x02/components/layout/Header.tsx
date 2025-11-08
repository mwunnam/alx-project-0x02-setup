import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <h1>My App</h1>
        <ul>
          <li>
            <Link href="/home" className="hover:text-blue-200 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200 transition">About</Link>
          </li>
          <li> 
            <Link href="/contact" className="hover:text-blue-200 transition">Contact Us</Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-blue-200 transition">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
