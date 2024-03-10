import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link, NavLink} from 'react-router-dom'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">Link</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" href="#">Horror</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Mysteries</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Finance</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Spirtuality</NavLink></li>
                  <li><NavLink className="dropdown-item" href="#">Health/Fitness</NavLink></li>

                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
export default Header;