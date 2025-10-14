// src/App.jsx  (avec routes)
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Checkout from "./pages/Checkout.jsx";
import Product from "./pages/Product.jsx";
import Payment from "./pages/Payment.jsx";
import Shipping from "./pages/Shipping.jsx";

export default function App() {
  const location = useLocation();
  const variants = { initial:{opacity:0, y:8}, animate:{opacity:1, y:0}, exit:{opacity:0, y:-8} };

  return (
    <div className="app">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial" animate="animate" exit="exit"
            variants={variants} transition={{ duration:.18, ease:"easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
