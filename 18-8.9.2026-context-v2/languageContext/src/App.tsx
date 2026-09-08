import { useEffect } from "react";
import { useLanguage } from "./contexts/LanguageContext";
import { LanguageButton } from "./components/LanguageButton";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  const { language } = useLanguage();
  const direction = language === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <div
      dir={direction}
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1.5rem",
        fontFamily: "sans-serif",
        textAlign: direction === "rtl" ? "right" : "left",
      }}
    >
      <LanguageButton />
      <hr style={{ margin: "1.5rem 0" }} />
      <Header />
      <About />
      <Contact />
    </div>
  );
}