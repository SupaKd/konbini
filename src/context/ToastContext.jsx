import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import "../styles/toast.scss";

const ToastCtx = createContext(null);
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const show = useCallback((msg, ttl = 2500) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, ttl);
  }, []);

  return (
    <ToastCtx.Provider value={{ show }}>
      {children}
      {createPortal(
        <div className="toast-container">
          {toasts.map((t) => (
            <div key={t.id} className="toast">
              <span className="toast__icon">🛒</span>
              <p className="toast__msg">{t.msg}</p>
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastCtx.Provider>
  );
}
