import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const LanguageButton: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <button onClick={changeLanguage} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
      {language === "he" ? "Switch to English" : "עבור לעברית"}
    </button>
  );
};