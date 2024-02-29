"use client";
import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguajeContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
