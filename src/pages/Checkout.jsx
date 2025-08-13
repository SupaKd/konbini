// src/pages/Checkout.jsx
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Checkout(){
  const { items, subtotal, shipping, total, setQty, remove } = useCart();

  return (
    <section className="container" style={{padding:"1.5rem 0"}}>
      <h2>Commande</h2>
      {items.length===0 ? <p>Votre panier est vide.</p> : (
        <div className="grid" style={{gridTemplateColumns:"1fr", gap:"1rem"}}>
          <div className="card" style={{padding:"1rem"}}>
            <h3>Récapitulatif</h3>
            {items.map(i=> (
              <div key={i.id} style={{display:"grid", gridTemplateColumns:"72px 1fr auto", gap:".6rem", alignItems:"center", padding:".4rem 0", borderBottom:"1px dashed rgba(0,0,0,.1)"}}>
                <img src={i.img} style={{width:72, height:72, objectFit:"cover", borderRadius:12, border:"2px solid #111"}} />
                <div>
                  <strong>{i.title}</strong>
                  <div style={{display:"flex", gap:".4rem", alignItems:"center", marginTop:".2rem"}}>
                    <input type="number" min={1} max={99} value={i.qty} onChange={e=>setQty(i.id, +e.target.value)} style={{width:70, padding:".4rem", border:"2px solid #111", borderRadius:10}}/>
                    <button className="btn--outline" onClick={()=>remove(i.id)}>Retirer</button>
                  </div>
                </div>
                <div style={{fontWeight:900}}>{(i.price*i.qty).toFixed(2)} €</div>
              </div>
            ))}
          </div>
          <div className="card" style={{padding:"1rem"}}>
            <h3>Total</h3>
            <div style={{display:"grid", gap:".4rem"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}><span>Sous-total</span><strong>{subtotal.toFixed(2)} €</strong></div>
              <div style={{display:"flex", justifyContent:"space-between"}}><span>Livraison</span><strong>{shipping.toFixed(2)} €</strong></div>
              <div style={{height:2, background:"#111", opacity:.2, margin:".3rem 0"}}></div>
              <div style={{display:"flex", justifyContent:"space-between"}}><span>Total</span><strong>{total.toFixed(2)} €</strong></div>
              <Link className="btn" to="/shipping">Renseigner la livraison</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
