// src/pages/Shipping.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import "./Shipping.scss";

export default function Shipping() {
  const nav = useNavigate();
  const { shipping, setShipping } = useCheckout();
  const { items } = useCart();
  const [form, setForm] = useState(shipping);

  if (!items.length) {
    return (
      <section className="container shipping">
        <p>Panier vide.</p>
        <Link className="btn--outline" to="/catalog">Retour au catalogue</Link>
      </section>
    );
  }

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const valid = () =>
    form.firstName && form.lastName && form.email && form.address && form.zip && form.city;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid()) return;
    setShipping(form);
    nav("/payment");
  };

  return (
    <section className="container shipping">
      <h2>Livraison</h2>

      <form onSubmit={onSubmit} className="card">
        <div className="row" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label>Prénom</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Nom</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="row" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Téléphone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Optionnel"
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Adresse</label>
            <input
              name="address"
              value={form.address}
              onChange={onChange}
              required
            />
            <div className="hint">Interphone, étage, code…</div>
          </div>
        </div>

        <div className="row" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label>Code postal</label>
            <input
              name="zip"
              value={form.zip}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Ville</label>
            <input
              name="city"
              value={form.city}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Instructions</label>
            <textarea
              name="notes"
              rows="3"
              value={form.notes}
              onChange={onChange}
              placeholder="Ex: laisser au voisin si absent"
            />
          </div>
        </div>

        <div className="actions">
          <Link className="btn--outline" to="/checkout">Retour</Link>
          <button className="btn" type="submit" disabled={!valid()}>
            Continuer vers le paiement
          </button>
        </div>
      </form>
    </section>
  );
}
