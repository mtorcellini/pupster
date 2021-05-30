import {Link, useLocation} from 'react-router-dom';

function NavTabs() {

  return (
    <nav className="navbar bg-light navbar-light">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Pupster</Link>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link className={useLocation().pathname === "/" ? "nav-link active" : "nav-link"} to="/">About</Link>
          </li>
          <li className="nav-item">
            <Link className={useLocation().pathname === "/discover" ? "nav-link active" : "nav-link"} to="/discover">Discover</Link>
          </li>
          <li className="nav-item">
            <Link className={useLocation().pathname === "/search" ? "nav-link active" : "nav-link"} to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  )

}

export default NavTabs;