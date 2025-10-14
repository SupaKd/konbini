import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data/product.js";
import ProductCard from "../components/ProductCard.jsx";
import "./catalog.scss";

export default function Catalog(){
  const [q,setQ] = useState("");
  const [cat,setCat] = useState("all");

  const filtered = useMemo(()=>{
    return PRODUCTS.filter(p=>
      (cat==="all" || p.category===cat) &&
      (q==="" || p.title.toLowerCase().includes(q.toLowerCase()))
    );
  },[q,cat]);

  return (
    <section className="catalog container">
  <h2>Produits</h2>
  <div className="search-bar">
    <input 
      placeholder="Recherche" 
      value={q} 
      onChange={e=>setQ(e.target.value)} 
    />
    <div className="categories">
      <button className={`btn--outline ${cat==='all'?'active':''}`} onClick={()=>setCat('all')}>Tout</button>
      {CATEGORIES.map(c=> (
        <button key={c.id} className={`btn--outline ${cat===c.id?'active':''}`} onClick={()=>setCat(c.id)}>{c.name}</button>
      ))}
    </div>
  </div>
  <div className="product-grid">
    {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
  </div>
</section>

  );
}
