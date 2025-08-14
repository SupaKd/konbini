import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import "./checkout.scss";

export default function Checkout() {
  const { items, subtotal, shipping, total, setQty, remove } = useCart();

  return (
    <section className="checkout container">
      <h2>Commande</h2>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="checkout__grid">
          <div className="checkout__card">
            <h3>Récapitulatif</h3>
            {items.map((i) => (
              <div className="checkout__item" key={i.id}>
                <img src={i.img} alt={i.title} />
                <div className="checkout__details">
                  <strong className="checkout__title">{i.title}</strong>
                  <div className="checkout__actions">
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={i.qty}
                      onChange={(e) => setQty(i.id, +e.target.value)}
                      aria-label={`Quantité pour ${i.title}`}
                    />
                    <button
                      className="btn--outline"
                      onClick={() => remove(i.id)}
                    >
                      Retirer
                    </button>
                  </div>
                  <div className="checkout__price">
                    {(i.price * i.qty).toFixed(2)} €
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout__card checkout__totals">
            <h3>Total</h3>
            <div className="checkout__summary">
              <div className="checkout__row">
                <span>Sous-total</span>
                <strong>{subtotal.toFixed(2)} €</strong>
              </div>
              <div className="checkout__row">
                <span>Livraison</span>
                <strong>{shipping.toFixed(2)} €</strong>
              </div>
              <div className="checkout__divider" />
              <div className="checkout__row checkout__row--total">
                <span>Total</span>
                <strong>{total.toFixed(2)} €</strong>
              </div>
              <Link className="btn" to="/shipping">
                Renseigner la livraison
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
