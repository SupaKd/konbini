import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data/product.js";
import ProductCard from "../components/ProductCard.jsx";

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
    <section className="container" style={{padding:"1.5rem 0"}}>
      <h2>Catalogue</h2>
      <div style={{display:"grid", gap:".6rem", gridTemplateColumns:"1fr"}}>
        <input placeholder="Recherche" value={q} onChange={e=>setQ(e.target.value)} style={{padding:".8rem", border:"2px solid #111", borderRadius:"12px"}} />
        <div style={{display:"flex", gap:".4rem", flexWrap:"wrap"}}>
          <button className={`btn--outline ${cat==='all'?'active':''}`} onClick={()=>setCat('all')}>Tout</button>
          {CATEGORIES.map(c=> (
            <button key={c.id} className={`btn--outline ${cat===c.id?'active':''}`} onClick={()=>setCat(c.id)}>{c.name}</button>
          ))}
        </div>
      </div>
      <div className="grid" style={{gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", marginTop:"1rem"}}>
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
