import { Link } from "react-router-dom"

const Header = () => {

  return (
    <header>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/about' >Share Your Experience</Link>
      </nav>
    </header>
  )
}

export default Header