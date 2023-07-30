import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
export default function DisplayLanguage() {
  const { lang, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <label>Select Laguage:</label>
      <select onChange={(e) => changeLanguage(e.target.value)} value={lang}>
        <option value="English" selected>
          English
        </option>
        <option value="Türkçe">Türkçe</option>
        <option value="German">German</option>
      </select>
    </div>
  );
}
