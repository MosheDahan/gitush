import React, { useState, type ReactNode } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 1. הגדרת state עם ברירת מחדל "he"
  const [language, setLanguage] = useState<string>("he");

  // 2. פונקציה להחלפת שפה בין "he" ל-"en"
  const changeLanguage = () => {
    setLanguage((prevLang) => (prevLang === "he" ? "en" : "he"));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};