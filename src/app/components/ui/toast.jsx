import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = (message, type = "default") => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 4000); // Slightly longer for better readability
  };

  const getIcon = (type) => {
    switch (type) {
      case "success": return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case "error": return <AlertCircle className="w-5 h-5 text-rose-400" />;
      default: return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Optimized Container */}
      <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-4 w-full max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="alert"
            className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 
                       bg-gray-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                       animate-in slide-in-from-right-8 fade-in duration-300"
          >
            {/* Type Indicator Icon */}
            <div className="flex-shrink-0">
              {getIcon(toast.type)}
            </div>

            {/* Message */}
            <div className="flex-1 text-sm font-medium text-gray-100">
              {toast.message}
            </div>

            {/* Manual Close Button */}
            <button 
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Animated Progress Bar (The "Lucrative" Touch) */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden w-full">
              <div 
                className={`h-full transition-all duration-[4000ms] linear
                  ${toast.type === 'success' ? 'bg-emerald-500' : 
                    toast.type === 'error' ? 'bg-rose-500' : 'bg-blue-500'}`}
                style={{ width: '100%', animation: 'shrink 4s linear forwards' }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);