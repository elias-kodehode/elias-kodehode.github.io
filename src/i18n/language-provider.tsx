import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "./translations";
import type { Language } from "./translations";
import { LanguageContext } from "./use-language";

const storageKey = "portfolio-language";

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "en" || saved === "nb") return saved;
  } catch {
    // The language switch also works when browser storage is unavailable.
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.metadata.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", t.metadata.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", t.metadata.socialDescription);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", t.metadata.socialLocale);

    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Keep the chosen language for this visit if storage is blocked.
    }
  }, [language, t]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

