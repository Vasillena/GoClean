import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header>
      <div className="header">
        <ul className="navbar-list">
          <li className="navbar-item">
            <button className="menu-button">
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
            </button>
            <Link to="/" className="home-link">
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </li>
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
      </div>
    </header>
  );
}
