import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h4>Ecom</h4>
          <p>Horaires: 10:00–20:00.</p>
        </div>
        <div>
          <h4>Liens</h4>
          <ul>
            <li>
              <a href="/catalog">Catalogue</a>
            </li>
            <li>
              <a href="/checkout">Commander</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Réseaux</h4>
          <ul className="social">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTiktok} /> TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        © {new Date().getFullYear()} Powered by SupaCo | Ecom
      </div>
    </footer>
  );
}
