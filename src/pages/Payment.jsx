// src/pages/Payment.jsx
import { useState, useMemo } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext.jsx";
import "./Payment.scss";

export default function Payment(){
  const navigate = useNavigate();
  const { shipping } = useCheckout();
  const { items, subtotal, shipping: shipFee, total, clear } = useCart();
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", number: "", exp: "", cvc: "", address: shipping?.address || "", method: "card"
  });

  const disabled = useMemo(()=>{
    if(!items.length) return true;
    const num = form.number.replace(/\s/g, "");
    const numOk = /^\d{16}$/.test(num);
    const expOk = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(form.exp);
    const cvcOk = /^\d{3,4}$/.test(form.cvc);
    return !(form.name && numOk && expOk && cvcOk);
  },[form, items.length]);

  function handleChange(e){
    const { name, value } = e.target;
    setForm(f=>({ ...f, [name]: value }));
  }

  function pay(){
    setProcessing(true);
    setTimeout(()=>{
      setProcessing(false);
      setDone(true);
      clear();
    }, 1200);
  }

  if(items.length===0 && !done){
    return (
      <section className="container pay" style={{padding:"1.5rem 0"}}>
        <p>Panier vide.</p>
        <Link className="btn--outline" to="/catalog">Retour au catalogue</Link>
      </section>
    );
  }

  if(done){
    return (
      <section className="container pay" style={{padding:"1.5rem 0"}}>
        <div className="card success">
          <h2>Paiement validé</h2>
          <p>Merci. Un e‑mail de confirmation a été envoyé.</p>
          <button className="btn" onClick={()=>navigate("/")}>Retour à l’accueil</button>
        </div>
      </section>
    );
  }

  return (
    <section className="container pay">
      <h2>Paiement</h2>
      <div className="layout">
        {/* Récap livraison */}
        <aside className="card" style={{padding:"1rem"}}>
          <h3>Livraison</h3>
          {shipping?.address ? (
            <div style={{lineHeight:1.4}}>
              <div>{shipping.firstName} {shipping.lastName}</div>
              <div>{shipping.address}</div>
              <div>{shipping.zip} {shipping.city}</div>
              <div style={{opacity:.8}}>
                {shipping.email}{shipping.phone ? ` · ${shipping.phone}` : ""}
              </div>
              {shipping.notes && <div style={{marginTop:".4rem"}}>Notes: {shipping.notes}</div>}
            </div>
          ) : (
            <div><Link className="btn--outline" to="/shipping">Ajouter l’adresse</Link></div>
          )}
        </aside>

        {/* Formulaire paiement */}
        <div className="card form">
          <div className="methods">
            <label><input type="radio" name="method" value="card"
              checked={form.method==='card'} onChange={handleChange}/> Carte</label>
            <label><input type="radio" name="method" value="paypal"
              checked={form.method==='paypal'} onChange={handleChange}/> PayPal (simulation)</label>
          </div>

          <div className="grid">
            <div className="field">
              <label>Nom sur la carte</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Taro Yamada" />
            </div>
            <div className="field">
              <label>Numéro de carte</label>
              <input name="number" value={form.number} onChange={handleChange}
                     inputMode="numeric" maxLength={19} placeholder="4242 4242 4242 4242" />
            </div>
            <div className="field inline">
              <div>
                <label>Expiration</label>
                <input name="exp" value={form.exp} onChange={handleChange} placeholder="MM/AA" maxLength={5} />
              </div>
              <div>
                <label>CVC</label>
                <input name="cvc" value={form.cvc} onChange={handleChange}
                       inputMode="numeric" maxLength={4} placeholder="123" />
              </div>
            </div>
            <div className="field">
              <label>Adresse de facturation</label>
              <input name="address" value={form.address} onChange={handleChange} placeholder="10 rue du Konbini" />
            </div>
          </div>

          <button className="btn" disabled={disabled || processing} onClick={pay}>
            {processing ? "Traitement..." : `Payer ${total.toFixed(2)} €`}
          </button>
          <p className="fine">Test uniquement. Aucun paiement réel.</p>
        </div>

        {/* Récap panier */}
        <aside className="card summary">
          <h3>Récapitulatif</h3>
          <div className="items">
            {items.map(i=> (
              <div key={i.id} className="line">
                <img src={i.img} alt="" />
                <div className="col">
                  <strong>{i.title}</strong>
                  <span>x{i.qty}</span>
                </div>
                <div className="amt">{(i.price*i.qty).toFixed(2)} €</div>
              </div>
            ))}
          </div>
          <div className="totals">
            <div><span>Sous-total : </span><strong>{subtotal.toFixed(2)} €</strong></div>
            <div><span>Livraison : </span><strong>{shipFee.toFixed(2)} €</strong></div>
            <div className="hr" />
            <div className="total"><span>Total : </span><strong>{total.toFixed(2)} €</strong></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
