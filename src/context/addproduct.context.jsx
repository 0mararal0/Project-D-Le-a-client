import React, { createContext, useEffect, useState } from "react";

// Crear el contexto
export const AddProductContext = createContext();

// Crear el proveedor del contexto
export const AddProductProvider = ({ children }) => {
  // Estado booleano

  const [finalOrder, setFinalOrder] = useState([]);

  // Funciones para cambiar el estado
  useEffect(() => {
    updateContext();
  }, []);
  const updateContext = () => {
    const retrievedOrderString = localStorage.getItem("order");
    const retrievedOrder = JSON.parse(retrievedOrderString);
    setFinalOrder(retrievedOrder);
    /* if (retrievedOrder.length !== 0) {
      setCount(retrievedOrder.length);
    } else {
      setCount(0);
    } */
  };

  return (
    <AddProductContext.Provider value={{ updateContext, finalOrder }}>
      {children}
    </AddProductContext.Provider>
  );
};
