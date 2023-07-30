import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
export default function DisplayLanguage() {
  const { lang, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h1>{lang}</h1>
      <label>Select Laguage:</label>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={lang}
      >
        <option value="English">English</option>
        <option value="Türkçe">Türkçe</option>
        <option value="German">German</option>
      </select>
    </div>
  );
}
