// src/layout/Header.jsx
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext.jsx";
import CartDrawer from "./CartDrawer.jsx";
import "./header.scss";

export default function Header() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [theme, setTheme] = useState("light");

  const count = items.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark =
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (systemDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <header className="header">
      <div className="header__container">
        {/* LOGO */}
        <Link to="/" className="header__logo">
          <img src="/red.png" alt="Logo" />
        </Link>

        {/* NAVIGATION */}
        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          <img className="header__nav-logo" src="/red.png" alt="" />
          <NavLink to="/" onClick={() => setOpen(false)}>
            Accueil
          </NavLink>
          <NavLink to="/catalog" onClick={() => setOpen(false)}>
            Produits
          </NavLink>
          <NavLink to="/checkout" onClick={() => setOpen(false)}>
            Commander
          </NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="header__actions">
          {/* Thème */}
          <button
            className="header__btn header__btn--theme"
            onClick={toggleTheme}
            aria-label="Changer le thème"
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>

          {/* Panier */}
          <button
            className="header__btn header__btn--cart"
            onClick={() => setDrawer(true)}
            aria-label="Ouvrir le panier"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {count > 0 && <span className="header__badge">{count}</span>}
          </button>

          {/* Menu mobile */}
          <button
            className="header__btn header__btn--menu hide-desktop"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      <CartDrawer open={drawer} onClose={() => setDrawer(false)} />
    </header>
  );
}
