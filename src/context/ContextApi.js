import { createContext } from "react";
import { useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  const [showPopUP, setShowPopUp] = useState(false); //state for handling popup
  return (
    <context.Provider value={{ showPopUP, setShowPopUp }}>
      {children}
    </context.Provider>
  );
};

export default ContextApi;
