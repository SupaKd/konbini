import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import CartDrawer from "./CartDrawer.jsx";
import "./Header.scss";

export default function Header(){
  const { items } = useCart();
  const count = items.reduce((s,i)=>s+i.qty,0);
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(()=>{ if(open) document.body.style.overflow='hidden'; else document.body.style.overflow='auto'; },[open]);

  useEffect(()=>{
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (systemDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  },[]);

  function toggleTheme(){
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">Konbini</Link>

        <nav className={`nav ${open?"is-open":""}`}>
          <NavLink to="/" onClick={()=>setOpen(false)}>Accueil</NavLink>
          <NavLink to="/catalog" onClick={()=>setOpen(false)}>Catalogue</NavLink>
          <NavLink to="/checkout" onClick={()=>setOpen(false)}>Commander</NavLink>
        </nav>

        <div className="actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Thème">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="icon-btn" onClick={()=>setDrawer(true)} aria-label="Panier">
            <ShoppingCart size={22} />
            {count>0 && <span className="badge" aria-label={`${count} articles`}>{count}</span>}
          </button>
          <button className="icon-btn hide-desktop" onClick={()=>setOpen(v=>!v)} aria-label="Menu">
            {open? <X size={22}/> : <Menu size={22}/>} 
          </button>
        </div>
      </div>
      <CartDrawer open={drawer} onClose={()=>setDrawer(false)} />
    </header>
  );
}
