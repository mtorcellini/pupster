import {Link} from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/">About</Link>
      </li>
    </ul>
  )

}

export default NavTabs;