import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section style={{ margin: "1.5rem 0" }}>
      <h2>{isEnglish ? "Contact Us" : "צור קשר"}</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", flexDirection: "column", gap: "0.8rem", maxWidth: "300px" }}
      >
        <div>
          <label style={{ display: "block", marginBottom: "0.2rem" }}>
            {isEnglish ? "Name" : "שם"}
          </label>
          <input type="text" style={{ width: "100%", padding: "0.4rem" }} />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.2rem" }}>
            {isEnglish ? "Phone" : "טלפון"}
          </label>
          <input type="tel" style={{ width: "100%", padding: "0.4rem" }} />
        </div>

        <button type="submit" style={{ padding: "0.5rem", cursor: "pointer" }}>
          {isEnglish ? "Send" : "שלח"}
        </button>
      </form>
    </section>
  );
};