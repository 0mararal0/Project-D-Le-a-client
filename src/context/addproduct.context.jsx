import { createContext, useEffect, useState } from "react";

export const AddProductContext = createContext();

export const AddProductProvider = ({ children }) => {
  const [finalOrder, setFinalOrder] = useState([]);

  useEffect(() => {
    updateContext();
  }, []);

  const updateContext = () => {
    const retrievedOrderString = localStorage.getItem("order");
    const retrievedOrder = JSON.parse(retrievedOrderString);
    setFinalOrder(retrievedOrder);
  };

  return (
    <AddProductContext.Provider value={{ updateContext, finalOrder }}>
      {children}
    </AddProductContext.Provider>
  );
};
