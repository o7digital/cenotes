"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "es" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const pathLang = window.location.pathname.startsWith("/es") ? "es" : "en";
    const saved = window.localStorage.getItem("site_lang");

    if (saved === "es" || saved === "en") {
      setLangState(pathLang === "es" ? "es" : saved);
      return;
    }

    setLangState(pathLang);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("site_lang", next);
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
