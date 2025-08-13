import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import { PRODUCTS, CATEGORIES } from "../data/product.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home(){
  const featured = PRODUCTS.slice(0,5);
  return (
    <>
      <Hero />
      <section className="container" style={{padding:"1.5rem 0"}}>
        <h2>Produits populaires</h2>
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))"}}>
          {featured.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
        <div style={{textAlign:"center", marginTop:"1rem"}}>
          <Link className="btn" to="/catalog">Tout le catalogue</Link>
        </div>
      </section>
    </>
  );
}
