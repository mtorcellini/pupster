import {Link} from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/discover">Discover</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  )

}

export default NavTabs;