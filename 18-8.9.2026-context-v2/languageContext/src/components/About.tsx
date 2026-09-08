import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const About: React.FC = () => {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <section style={{ margin: "1.5rem 0" }}>
        <h2>About</h2>
        <p>This is an example website built with React.</p>
      </section>
    );
  }

  return (
    <section style={{ margin: "1.5rem 0" }}>
      <h2>אודות</h2>
      <p>זהו אתר לדוגמה שנבנה באמצעות React.</p>
    </section>
  );
};