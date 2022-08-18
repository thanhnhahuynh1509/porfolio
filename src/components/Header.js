import { List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  let [color, updateColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 180) updateColor(true);
    else updateColor(false);
  };

  window.addEventListener("scroll", changeColor);

  const openMenu = (e) => {
    const navContainer = e.target.closest(".nav-contain");
    navContainer.classList.toggle("nav-open");
  };

  const closeMenu = (e) => {
    const navContainer = e.target.closest(".nav-contain");
    navContainer.classList.remove("nav-open");
  };

  return (
    <header
      className={color ? "header pos-fixed header-bg" : "header pos-fixed"}
    >
      <div className="header-container container flex justify-content-between align-items-center">
        <div className="logo-contain">
          <h1>Huỳnh Thanh Nhã</h1>
        </div>
        <div className="nav-contain">
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-list-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={0}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-list-item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={0}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-list-item">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={0}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="contain-btn-menu">
            <button className="btn-menu btn-menu-open" onClick={openMenu}>
              <List size={32} />
            </button>
            <button className="btn-menu btn-close-open" onClick={openMenu}>
              <X size={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
