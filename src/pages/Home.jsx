import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/product.js";
import ProductCard from "../components/ProductCard.jsx";
import MapSection from "../components/MapSection.jsx";
import "./home.scss";

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <main className="home">
      <Hero />
      
      <section className="container home__featured">
        <h2>Produits populaires</h2>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="home__cta">
          <Link className="btn" to="/catalog">
            Tout le catalogue
          </Link>
        </div>
      </section>

          <MapSection />
      
    </main>
  );
}
