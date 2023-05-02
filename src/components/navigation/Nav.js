import "./Nav.css";
import Logo from "../images/logo.png";

const Nav = () => {
  return (
    <nav className="Navigation">
      <img src={Logo} alt="Logo" className="Nav-logo" />

      <div className="nav-list-link">
        <ul className="nav-list-order">
          <li>
            <a className="main-navlinks">Home</a>
          </li>
          <li>
          
            <a className="main-navlinks">About</a>
          </li>
          <li>
        
            <a className="main-navlinks">Works</a>
          </li>
          <li>
          
            <a className="main-navlinks">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
