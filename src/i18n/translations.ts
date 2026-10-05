import { homeTranslations } from "./home-translations";

const en = {
  nav: {
    skills: "Skills",
    projects: "Projects",
    about: "About",
    contact: "GitHub",
    github: "GitHub profile",
  },
  menu: {
    open: "Open menu",
    navigate: "Navigate",
    social: "Social",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    switchLanguage: "Switch to Norsk (Norwegian Bokmål)",
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist.",
    back: "Back to home",
  },
  metadata: {
    title: "Elias Sørensen — Full-stack developer",
    description:
      "Elias Sørensen is a full-stack developer working with React, TypeScript, C#, and .NET. Explore selected projects and public GitHub repositories.",
    socialDescription:
      "Selected full-stack projects built with React, TypeScript, C#, and .NET.",
    socialLocale: "en_US",
  },
  home: homeTranslations.en,
};

const nb = {
  nav: {
    skills: "Kompetanse",
    projects: "Prosjekter",
    about: "Om meg",
    contact: "GitHub",
    github: "GitHub-profil",
  },
  menu: {
    open: "Åpne meny",
    navigate: "Navigasjon",
    social: "Sosiale medier",
    theme: "Tema",
    light: "Lyst",
    dark: "Mørkt",
    system: "System",
    switchLanguage: "Bytt til English (engelsk)",
  },
  notFound: {
    title: "Fant ikke siden",
    description: "Siden du leter etter, finnes ikke.",
    back: "Tilbake til forsiden",
  },
  metadata: {
    title: "Elias Sørensen — Fullstack-utvikler",
    description:
      "Elias Sørensen er en fullstack-utvikler som jobber med React, TypeScript, C# og .NET. Utforsk utvalgte prosjekter og offentlige GitHub-repositorier.",
    socialDescription:
      "Utvalgte fullstack-prosjekter laget med React, TypeScript, C# og .NET.",
    socialLocale: "nb_NO",
  },
  home: homeTranslations.nb,
} satisfies typeof en;

export const translations = { en, nb };
export type Language = keyof typeof translations;
