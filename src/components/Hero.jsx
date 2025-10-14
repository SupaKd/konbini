import "./hero.scss";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>Épicerie japonaise<br/>fraîche et locale</h1>
          <p>Ramen, snacks, boissons et sauces sélectionnés. Click & Collect ou livraison.</p>
          <div className="cta">
            <Link to="/catalog" className="btn">Voir le catalogue</Link>
            <Link to="/checkout" className="btn--outline">Commander</Link>
          </div>
        </div>
        <img
          className="hero__img"
          src="/ramen.png"
          alt="Bols de ramen"
          loading="eager"
        />
      </div>
    </section>
  );
}
