import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthContext);

  const headerElement = document.querySelector("header");

  if (headerElement) {
    window.addEventListener("scroll", function () {
      // if (window.pageYOffset > 100) {
              if (window.scrollY > 100) {
        headerElement.classList.add("blur-background");
      } else {
        headerElement.classList.remove("blur-background");
      }
    });
  }

  return (
    <header>
      <div className="header">
         <div>
            <button className="menu-button">
           <img src="../../../public/images/bookmark-solid.svg" alt="bookmark" />
              {/* <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} /> */}
            </button>
          </div>
          <nav>
  <ul className="navbar-list">
           <li className="navbar-item"><Link to="/" className="home-link">
              Home
            </Link>  </li>
          <li className="navbar-item">
            <Link to="/activeCampaigns" className="navbar-link">
              Active campaigns
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/goGreen" className="navbar-link">
              Go Green
            </Link>
          </li>
          {isAuthenticated && (
            <>
              <li className="navbar-item">
                <Link to="/createCampaign" className="navbar-link">
                  Create campaign
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/myCampaigns" className="navbar-link">
                  My Campaigns
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/logout" className="login-logout-link">
                  Logout
                </Link>
              </li>
            </>
          )}

          {!isAuthenticated && (
            <li className="navbar-item">
              <Link to="/login" className="login-logout-link">
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
