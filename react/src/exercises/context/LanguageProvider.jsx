import React, { createContext, useState } from "react";
let LanguageContext;
export default function LanguageProvider({ children }) {
  LanguageContext = createContext();
  const [lang, setLang] = useState("English");
  const changeLanguage = (lang) => {
    setLang(lang);
    console.log("Lang changed to " + lang);
  };
  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export { LanguageContext };
