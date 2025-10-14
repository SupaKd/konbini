import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./cartDrawer.scss";

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal, shipping, total, setQty, remove, clear } = useCart();

  if (!open) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div className="drawer__overlay" onClick={onClose} />

      {/* Drawer */}
      <aside className="drawer">
        <header className="drawer__header">
          <h3>Votre panier</h3>

          <div className="drawer__header-actions">
            <button className="btn--outline" onClick={clear}>
              Vider
            </button>
            <button className="drawer__close" onClick={onClose} aria-label="Fermer le panier">
              ✕
            </button>
          </div>
        </header>

        <div className="drawer__body">
          {items.length === 0 ? (
            <p>Panier vide.</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="row">
                <img src={i.img} alt={i.title} />
                <div className="col">
                  <strong>{i.title}</strong>
                  <span>{i.price.toFixed(2)} €</span>
                  <div className="qty">
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={i.qty}
                      onChange={(e) => setQty(i.id, +e.target.value)}
                    />
                    <button className="btn--outline" onClick={() => remove(i.id)}>
                      Retirer
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <footer className="drawer__footer">
          <div className="totals">
            <div>
              <span>Sous-total : </span>
              <strong>{subtotal.toFixed(2)} €</strong>
            </div>
            <div>
              <span>Livraison : </span>
              <strong>{shipping.toFixed(2)} €</strong>
            </div>
            <div className="hr"></div>
            <div className="total">
              <span>Total : </span>
              <strong>{total.toFixed(2)} €</strong>
            </div>
          </div>
          <Link to="/payment">
            <button className="btn" onClick={onClose}>
              Passer au paiement
            </button>
          </Link>
        </footer>
      </aside>
    </>,
    document.body
  );
}
