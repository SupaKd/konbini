// src/context/CheckoutContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext(null);
export const useCheckout = () => useContext(Ctx);

const KEY = "shipping_info";
const EMPTY = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", zip: "", city: "", notes: ""
};

export function CheckoutProvider({ children }) {
  const [shipping, setShipping] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || EMPTY; }
    catch { return EMPTY; }
  });

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(shipping)); } catch {}
  }, [shipping]);

  return <Ctx.Provider value={{ shipping, setShipping }}>{children}</Ctx.Provider>;
}
