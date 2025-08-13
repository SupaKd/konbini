// src/pages/Product.jsx
import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { PRODUCTS } from "../data/product.js";
import { useCart } from "../context/CartContext.jsx";
import { motion } from "framer-motion";
import "./product.scss";

export default function Product(){
  const { id } = useParams();
  const product = useMemo(() => PRODUCTS.find(p => String(p.id) === id), [id]);
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const gallery = useMemo(() => {
    const imgs = [];
    if (product?.img) imgs.push(product.img);
    if (Array.isArray(product?.images)) {
      product.images.forEach(u => { if (u && !imgs.includes(u)) imgs.push(u); });
    }
    return imgs;
  }, [product]);
  const [active, setActive] = useState(0);

  if (!product) {
    return (
      <section className="container product-page" style={{ padding: "1.5rem 0" }}>
        <p>Produit introuvable.</p>
        <Link to="/catalog" className="btn--outline" style={{ marginTop: "1rem" }}>
          Retour au catalogue
        </Link>
      </section>
    );
  }

  const avg = product.rating?.avg ?? 0;
  const count = product.rating?.count ?? 0;
  const stars = Array.from({ length: 5 }, (_, i) => (i < Math.round(avg) ? "★" : "☆")).join("");

  return (
    <section className="container product-page">
      <nav className="breadcrumb">
        <Link to="/catalog">Catalogue</Link>
        <span>/</span>
        <span>{product.title}</span>
      </nav>

      <div className="product-layout">
        {/* Galerie */}
        <div className="gallery card">
          {gallery[active] && (
            <motion.img
              key={gallery[active]}
              src={gallery[active]}
              alt={product.title}
              className="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
          )}
          {gallery.length > 1 && (
            <div className="thumbs" role="list">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  className={`thumb ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="info card">
          <h1 className="title">{product.title}</h1>
          {product.subtitle && <p className="subtitle">{product.subtitle}</p>}

          <div className="rating">
            <span className="stars" aria-label={`${avg} sur 5`}>{stars}</span>
            <span className="count">({count})</span>
            {product.origin && <span className="origin">· {product.origin}</span>}
          </div>

          <div className="pricing">
            <strong className="price">{product.price.toFixed(2)} €</strong>
            {product.compareAt && (
              <del className="compare">{Number(product.compareAt).toFixed(2)} €</del>
            )}
          </div>

          <div className="purchase">
            <label htmlFor="qty" className="sr-only">Quantité</label>
            <input
              id="qty"
              type="number"
              min={1}
              max={99}
              value={qty}
              onChange={e => setQty(Math.max(1, Math.min(99, +e.target.value || 1)))}
            />
            <button className="btn" onClick={() => add(product, qty)}>Ajouter au panier</button>
          </div>

          {product.desc && <p className="desc">{product.desc}</p>}

          {product.details && (
            <details className="details">
              <summary>Détails</summary>
              <p>{product.details}</p>
            </details>
          )}

          {Array.isArray(product.allergens) && product.allergens.length > 0 && (
            <div className="allergens">
              <span>Allergènes :</span>
              <ul>
                {product.allergens.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
