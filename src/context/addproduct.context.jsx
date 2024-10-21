import React, { createContext, useState } from "react";

// Crear el contexto
export const AddProductContext = createContext();

// Crear el proveedor del contexto
export const AddProductProvider = ({ children }) => {
  // Estado booleano
  const [count, setCount] = useState(0);

  // Funciones para cambiar el estado
  const toggleProduct = () => {
    const res = count + 1;
    setCount(res);
  };
  console.log(count);

  return (
    <AddProductContext.Provider value={{ count, toggleProduct }}>
      {children}
    </AddProductContext.Provider>
  );
};
