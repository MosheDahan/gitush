import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Header: React.FC = () => {
  const { language } = useLanguage();

  return (
    <header style={{ marginBottom: "1.5rem" }}>
      <h1>
        {language === "he" ? "ברוכים הבאים לאתר" : "Welcome to the website"}
      </h1>
    </header>
  );
};