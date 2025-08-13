// src/context/CartContext.jsx
import { createContext, useContext, useMemo, useReducer, useEffect } from "react";

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, qty = 1 } = action;
      const exists = state.items.find((i) => i.id === product.id);
      const items = exists
        ? state.items.map((i) =>
            i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, 99) } : i
          )
        : [...state.items, { ...product, qty }];
      return { ...state, items };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "QTY": {
      const { id, qty } = action;
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === id ? { ...i, qty: Math.max(1, Math.min(99, qty)) } : i
        ),
      };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  // Init from localStorage
  const initializer = () => {
    try {
      const stored = localStorage.getItem("cart_state");
      return stored ? JSON.parse(stored) : { items: [] };
    } catch {
      return { items: [] };
    }
  };
  const [state, dispatch] = useReducer(reducer, undefined, initializer);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart_state", JSON.stringify(state));
    } catch {
      // ignore storage errors
    }
  }, [state]);

  const api = useMemo(() => {
    const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = state.items.length ? 4.9 : 0;
    const total = +(subtotal + shipping).toFixed(2);
    return {
      items: state.items,
      subtotal: +subtotal.toFixed(2),
      shipping,
      total,
      add: (product, qty = 1) => dispatch({ type: "ADD", product, qty }),
      remove: (id) => dispatch({ type: "REMOVE", id }),
      setQty: (id, qty) => dispatch({ type: "QTY", id, qty }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
