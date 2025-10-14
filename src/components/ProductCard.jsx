import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";
import "./productCard.scss";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const { show } = useToast();

  const avg = product.rating?.avg ?? 0;
  const count = product.rating?.count ?? 0;
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.round(avg) ? "★" : "☆"
  ).join("");

  return (
    <article className="product card">
      <div className="product__imgWrap">
        <Link to={`/product/${product.id}`}>
          <img src={product.img} alt={product.title} loading="lazy" />
        </Link>
        {product.tag && <span className="tag product__tag">{product.tag}</span>}
      </div>

      <div className="product__body">
        <h3>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>

        <div className="product__rating">
          <span className="stars" aria-label={`${avg} sur 5`}>
            {stars}
          </span>
          <span className="count">({count})</span>
          {product.origin && <span className="origin">· {product.origin}</span>}
        </div>

        <div className="product__meta">
          <span className="price">
            {product.price.toFixed(2)} €
            {product.compareAt && (
              <del>{Number(product.compareAt).toFixed(2)} €</del>
            )}
          </span>
          <div className="product__actions">
            <Link className="btn--outline" to={`/product/${product.id}`}>
              Voir
            </Link>
            <button
              className="btn"
              onClick={() => {
                add(product, 1);
                show("Ajouté au panier");
              }}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
