import React, { createContext, useContext, useState, type ReactNode } from "react";

// 1. הגדרת המבנה של ה-Context
interface LanguageContextType {
  language: string;
  changeLanguage: () => void;
}

// 2. יצירת ה-Context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. יצירת ה-Provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // ברירת מחדל: עברית ('he')
  const [language, setLanguage] = useState<string>("he");

  // החלפת שפה בין עברית לאנגלית
  const changeLanguage = () => {
    setLanguage((prevLang) => (prevLang === "he" ? "en" : "he"));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Custom Hook לשימוש קל ברכיבים
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};