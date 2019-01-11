import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>x</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>x</a>
        </Link>
        <Link href="/mood">
        <a style={linkStyle}>x</a>
        </Link>
    </div>
)

export default Header
