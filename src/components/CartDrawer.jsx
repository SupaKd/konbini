import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import "./CartDrawer.scss";

export default function CartDrawer({ open, onClose }){
  const { items, subtotal, shipping, total, setQty, remove, clear } = useCart();

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="drawer__overlay" onClick={onClose} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} />
          <motion.aside className="drawer" initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }} transition={{ type:"tween", duration:.25 }}>
            <header className="drawer__header">
              <h3>Votre panier</h3>
              <button className="btn--outline" onClick={clear}>Vider</button>
            </header>
            <div className="drawer__body">
              {items.length===0 ? (
                <p>Panier vide.</p>
              ) : (
                items.map(i=> (
                  <div key={i.id} className="row">
                    <img src={i.img} alt=""/>
                    <div className="col">
                      <strong>{i.title}</strong>
                      <span>{i.price.toFixed(2)} €</span>
                      <div className="qty">
                        <input type="number" min={1} max={99} value={i.qty} onChange={e=>setQty(i.id, +e.target.value)} />
                        <button className="btn--outline" onClick={()=>remove(i.id)}>Retirer</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <footer className="drawer__footer">
              <div className="totals">
                <div><span>Sous-total : </span><strong>{subtotal.toFixed(2)} €</strong></div>
                <div><span>Livraison : </span><strong>{shipping.toFixed(2)} €</strong></div>
                <div className="hr"></div>
                <div className="total"><span>Total : </span><strong>{total.toFixed(2)} €</strong></div>
              </div>
              <a className="btn" href="/payment">Passer au paiement</a>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  , document.body);
}