import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-list">
          <li>
            <Link to="#" className="footer-link">
              Facebook
            </Link>
          </li>
          <li>
            <Link to="#" className="footer-link">
              Instagram
            </Link>
          </li>
          <li>
            <Link to="#" className="footer-link">
              Youtube
            </Link>
          </li>
          <li>
            <Link to="#" className="footer-link">
              Google Map
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © 2023 GoClean. All Rights Reserved | Crafted by
          <Link
            to="https://github.com/Vasillena"
            target="_blank"
            className="github-link"
          >
            {" "}
            Vasillena
          </Link>
        </p>
      </div>
    </footer>
  );
}
