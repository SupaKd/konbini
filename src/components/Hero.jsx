import "./hero.scss";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>
            Énergie. Audace.
            <br />
            Esprit Red Bull.
          </h1>
          <p>
            Boissons iconiques, éditions limitées et accessoires exclusifs.
            Commande en ligne ou livraison express.
          </p>

          <div className="cta">
            <Link to="/catalog" className="btn">
              Voir les produits
            </Link>
            <Link to="/checkout" className="btn--outline">
              Commander
            </Link>
          </div>
        </div>
        <img
          className="hero__img"
          src="/red.jpeg"
          alt="redbull classic"
          loading="eager"
        />
      </div>
    </section>
  );
}
