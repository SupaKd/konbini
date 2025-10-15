// src/pages/Payment.jsx
import { useState, useMemo } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext.jsx";
import "./payment.scss";

export default function Payment() {
  const navigate = useNavigate();
  const { shipping } = useCheckout();
  const { items, subtotal, shipping: shipFee, total, clear } = useCart();

  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    number: "",
    exp: "",
    cvc: "",
    address: shipping?.address || "",
    method: "card",
  });

  const disabled = useMemo(() => {
    if (!items.length) return true;
    const num = form.number.replace(/\s/g, "");
    const numOk = /^\d{16}$/.test(num);
    const expOk = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(form.exp);
    const cvcOk = /^\d{3,4}$/.test(form.cvc);
    return !(form.name && numOk && expOk && cvcOk);
  }, [form, items.length]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function pay() {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
      clear();
    }, 1200);
  }

  // Cas panier vide
  if (items.length === 0 && !done) {
    return (
      <section className="payment container">
        <p className="payment__empty">Votre panier est vide.</p>
        <Link className="btn btn--outline" to="/catalog">
          Retour au catalogue
        </Link>
      </section>
    );
  }

  // Cas paiement validé
  if (done) {
    return (
      <section className="payment container">
        <div className="payment__success card">
          <h2>Paiement validé</h2>
          <p>Merci pour votre commande. Un e-mail de confirmation a été envoyé.</p>
          <button className="valide" onClick={() => navigate("/")}>
            Retour à l’accueil
          </button>
        </div>
      </section>
    );
  }

  // Vue principale
  return (
    <section className="payment container">
      <h2 className="payment__title">Paiement</h2>

      <div className="payment__layout">
        {/* Bloc Livraison */}
        <aside className="payment__section payment__shipping card">
          <h3 className="payment__section-title">Livraison</h3>

          {shipping?.address ? (
            <div className="payment__shipping-info">
              <p>{shipping.firstName} {shipping.lastName}</p>
              <p>{shipping.address}</p>
              <p>{shipping.zip} {shipping.city}</p>
              <p>{shipping.email}{shipping.phone ? ` · ${shipping.phone}` : ""}</p>
              {shipping.notes && <p>Notes : {shipping.notes}</p>}
            </div>
          ) : (
            <div className="payment__shipping-empty">
              <Link className="btn btn--outline" to="/shipping">
                Ajouter l’adresse
              </Link>
            </div>
          )}
        </aside>

        {/* Bloc Formulaire */}
        <div className="payment__section payment__form card">
          <h3 className="payment__section-title">Méthode de paiement</h3>

          <div className="payment__methods">
            <label className="payment__method">
              <input
                type="radio"
                name="method"
                value="card"
                checked={form.method === "card"}
                onChange={handleChange}
              />
              Carte bancaire
            </label>

            <label className="payment__method">
              <input
                type="radio"
                name="method"
                value="paypal"
                checked={form.method === "paypal"}
                onChange={handleChange}
              />
              PayPal (simulation)
            </label>
          </div>

          <div className="payment__fields">
            <div className="field">
              <label>Nom sur la carte</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Taro Yamada"
              />
            </div>

            <div className="field">
              <label>Numéro de carte</label>
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                inputMode="numeric"
                maxLength={19}
                placeholder="4242 4242 4242 4242"
              />
            </div>

            <div className="field field--inline">
              <div>
                <label>Expiration</label>
                <input
                  name="exp"
                  value={form.exp}
                  onChange={handleChange}
                  placeholder="MM/AA"
                  maxLength={5}
                />
              </div>
              <div>
                <label>CVC</label>
                <input
                  name="cvc"
                  value={form.cvc}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="123"
                />
              </div>
            </div>

            <div className="field">
              <label>Adresse de facturation</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="10 rue du Konbini"
              />
            </div>
          </div>

          <button
            className="btn payment__submit"
            disabled={disabled || processing}
            onClick={pay}
          >
            {processing ? "Traitement..." : `Payer ${total.toFixed(2)} €`}
          </button>

          <p className="payment__note">Test uniquement — aucun paiement réel.</p>
        </div>

        {/* Bloc Récapitulatif */}
        <aside className="payment__section payment__summary card">
          <h3 className="payment__section-title">Récapitulatif</h3>

          <div className="payment__items">
            {items.map((i) => (
              <div key={i.id} className="payment__item">
                <img src={i.img} alt={i.title} className="payment__item-img" />
                <div className="payment__item-info">
                  <strong>{i.title}</strong>
                  <span>x{i.qty}</span>
                </div>
                <div className="payment__item-price">
                  {(i.price * i.qty).toFixed(2)} €
                </div>
              </div>
            ))}
          </div>

          <div className="payment__totals">
            <div><span>Sous-total :</span><strong>{subtotal.toFixed(2)} €</strong></div>
            <div><span>Livraison :</span><strong>{shipFee.toFixed(2)} €</strong></div>
            <div className="payment__divider"></div>
            <div className="payment__total">
              <span>Total :</span><strong>{total.toFixed(2)} €</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
