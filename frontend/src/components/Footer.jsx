import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-item">
          <Link to="/">FAQ</Link>
        </li>
        <li className="footer-item">
          <Link to="/">CONTACT</Link>
        </li>
        <li className="footer-item">
          <Link to="/">TERMS OF USE</Link>
        </li>
        <li className="footer-item">
          <Link to="/">LINKS</Link>
        </li>
      </ul>
    </div>
  );
}
