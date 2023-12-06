import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
      const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log(setIsMenuOpen)
  };

    const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isScrolled ? "blur-background" : ""}>
      <div className="header">
         <div>
            <button className="menu-button" onClick={toggleMenu}>
           <img src="../../../public/images/bars-solid.svg" alt="bookmark" />
            </button>
          </div>
          <nav className={isMenuOpen ? "menu-open" : ""}>
  <ul className="navbar-list">
     <div>
            <button className="menu-button second" onClick={toggleMenu}>
           <img src="../../../public/images/bars-solid.svg" alt="bookmark" />
            </button>
          </div>
           <li className="navbar-item"><Link to="/" className="home-link" onClick={closeMenu}>
              Home
            </Link>  </li>
          <li className="navbar-item">
            <Link to="/activeCampaigns" className="navbar-link" onClick={closeMenu}>
              Active campaigns
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/goGreen" className="navbar-link" onClick={closeMenu}>
              Go Green
            </Link>
          </li>
          {isAuthenticated && (
            <>
              <li className="navbar-item">
                <Link to="/createCampaign" className="navbar-link" onClick={closeMenu}>
                  Create campaign
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/myCampaigns" className="navbar-link" onClick={closeMenu}>
                  My Campaigns
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/logout" className="login-logout-link" onClick={closeMenu}>
                  Logout
                </Link>
              </li>
            </>
          )}

          {!isAuthenticated && (
            <li className="navbar-item">
              <Link to="/login" className="login-logout-link" onClick={closeMenu}>
                Login
              </Link>
            </li>
          )}
        </ul>
          </nav>
      
      </div>
    </header>
  );
}
