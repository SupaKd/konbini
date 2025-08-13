import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.scss";
import { Link } from "react-router-dom";

export default function Hero(){
  const titleRef = useRef(null);

  useEffect(()=>{
    // Subtle entrance with GSAP only on mount
    gsap.fromTo(titleRef.current, { y: 20, opacity: 0 }, { y:0, opacity:1, duration:.6, ease:"power2.out" });
  },[]);

  return (
    <section className="hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.6 }}
        >
          <h1 ref={titleRef}>Épicerie japonaise<br/>fraîche et locale</h1>
          <p>Ramen, snacks, boissons et sauces sélectionnés. Click & Collect ou livraison.</p>
          <div className="cta">
            <Link to="/catalog" className="btn">Voir le catalogue</Link>
            <Link to="/checkout" className="btn--outline">Commander</Link>
          </div>
        </motion.div>
        <motion.img
          className="hero__img"
          src="/ramen.png"
          alt="Bols de ramen"
          initial={{ scale:.95, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          transition={{ duration:.6, delay:.1 }}
          loading="eager"
        />
      </div>
    </section>
  );
}
