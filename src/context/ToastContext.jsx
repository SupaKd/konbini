import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

const ToastCtx = createContext(null);
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const show = useCallback((msg, ttl = 1800) => {
    const id = crypto.randomUUID();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter(x => x.id !== id)), ttl);
  }, []);

  return (
    <ToastCtx.Provider value={{ show }}>
      {children}
      {createPortal(
        <div style={{
          position:"fixed", right:16, bottom:16, display:"grid", gap:8, zIndex:60
        }}>
          {toasts.map(t => (
            <div key={t.id} style={{
              background:"#3C7004", color:"#fff", padding:"10px 12px",
              border:"2px solid #111", borderRadius:12, boxShadow:"0 8px 24px rgba(0,0,0,.25)"
            }}>
              {t.msg}
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastCtx.Provider>
  );
}
