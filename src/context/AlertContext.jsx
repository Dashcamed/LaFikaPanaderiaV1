import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const AlertContext = createContext();

// Hook para acceder al contexto
export const useAlert = () => useContext(AlertContext);

// Proveedor del contexto
export const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState({
    message: "",
    visible: false,
    type: "success", // Tipo de alerta: 'success', 'error', 'warning', etc.
  });

  const showAlert = (message, type = "success") => {
    setAlertData({ message, visible: true, type });

    // Oculta la alerta automáticamente después de 3 segundos
    setTimeout(() => {
      setAlertData({ ...alertData, visible: false });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Alert
        visible={alertData.visible}
        message={alertData.message}
        type={alertData.type}
      />
    </AlertContext.Provider>
  );
};

const Alert = ({ visible, message, type }) => {
  const alertTypes = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  };

  return (
    visible && (
      <div className="toast toast-top toast-center z-10">
        <div className={`alert ${alertTypes[type]}`} role="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
      </div>
    )
  );
};
