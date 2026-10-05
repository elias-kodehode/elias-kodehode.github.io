const en = {
  hero: {
    role: "Full-stack developer",
    greeting: "Hello, I'm Elias Sørensen",
    title: "I build useful software for the web.",
    description:
      "I work across modern frontends and .NET backends, turning ideas into clear, dependable digital products.",
    viewWork: "View my work",
    githubProfile: "GitHub profile",
  },
  skills: {
    eyebrow: "What I work with",
    title: "From interface to infrastructure.",
    description:
      "A practical toolkit for building complete web applications, with an emphasis on readable code and reliable foundations.",
    items: {
      csharp: {
        title: "C# & .NET",
        description: "APIs, authentication, LINQ, and maintainable backend services.",
      },
      react: {
        title: "TypeScript & React",
        description: "Responsive interfaces built with reusable, accessible components.",
      },
      data: {
        title: "Data & APIs",
        description: "REST integrations, structured data, and end-to-end application flows.",
      },
      docker: {
        title: "Docker & Aspire",
        description: "Local orchestration and consistent development environments.",
      },
    },
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects that show how I build.",
    description:
      "A selection of frontend, backend, and full-stack work from my public GitHub repositories.",
    allRepositories: "All repositories",
    items: {
      gutendex: {
        title: "Gutendex v2",
        description:
          "A TypeScript application built around the Gutendex book catalogue API, focused on discovering and working with public book data.",
        tags: ["TypeScript", "React", "REST API"],
      },
      cms: {
        title: "CMS REST API",
        description:
          "A C# REST API for managing content and prizes, created as an advanced backend project with a clear API-first structure.",
        tags: ["C#", ".NET", "REST API"],
      },
      dashboard: {
        title: "Personal Data Dashboard",
        description:
          "A JavaScript dashboard project focused on presenting personal user data through a clear, usable interface.",
        tags: ["JavaScript", "Dashboard", "Data"],
      },
      ai: {
        title: "AI + C# Integration",
        description:
          "An experiment in connecting AI capabilities to a C# application and shaping the result into a usable software experience.",
        tags: ["C#", ".NET", "AI"],
      },
    },
  },
  about: {
    eyebrow: "About me",
    title: "Curious by nature. Practical by choice.",
    introduction:
      "I'm Elias, a developer who enjoys understanding the whole product—from the interface people use to the services and data behind it.",
    description:
      "My projects span React, TypeScript, C#, .NET, APIs, and containerized development. I learn by building, testing ideas, and improving the details that make software easier to use and maintain.",
    cleanCode: "Clean code",
    fullStack: "Full stack",
    alwaysLearning: "Always learning",
  },
  contact: {
    eyebrow: "On GitHub",
    title: "Explore more of my work.",
    description:
      "Browse my repositories to see what I'm building and how I work.",
    viewGithub: "View my GitHub",
  },
  footer: {
    backToTop: "Back to top",
  },
};

const nb = {
  hero: {
    role: "Fullstack-utvikler",
    greeting: "Hei, jeg er Elias Sørensen",
    title: "Jeg lager nyttig programvare for nettet.",
    description:
      "Jeg jobber med moderne frontend og backend i .NET, og gjør ideer til oversiktlige, pålitelige digitale produkter.",
    viewWork: "Se prosjektene mine",
    githubProfile: "GitHub-profil",
  },
  skills: {
    eyebrow: "Dette jobber jeg med",
    title: "Fra grensesnitt til infrastruktur.",
    description:
      "Et praktisk sett med verktøy for å bygge komplette nettapplikasjoner, med vekt på lesbar kode og et solid fundament.",
    items: {
      csharp: {
        title: "C# & .NET",
        description: "API-er, autentisering, LINQ og backend-tjenester som er enkle å vedlikeholde.",
      },
      react: {
        title: "TypeScript & React",
        description: "Responsive grensesnitt med gjenbrukbare og universelt utformede komponenter.",
      },
      data: {
        title: "Data og API-er",
        description: "REST-integrasjoner, strukturerte data og sammenhengende flyt gjennom hele applikasjonen.",
      },
      docker: {
        title: "Docker & Aspire",
        description: "Lokal orkestrering og enhetlige utviklingsmiljøer.",
      },
    },
  },
  projects: {
    eyebrow: "Utvalgte prosjekter",
    title: "Prosjekter som viser hvordan jeg bygger.",
    description:
      "Et utvalg av frontend-, backend- og fullstack-prosjekter fra mine offentlige GitHub-repositorier.",
    allRepositories: "Alle repositorier",
    items: {
      gutendex: {
        title: "Gutendex v2",
        description:
          "En TypeScript-applikasjon bygget rundt API-et til bokkatalogen Gutendex, med fokus på å utforske og bruke offentlig tilgjengelige bokdata.",
        tags: ["TypeScript", "React", "REST API"],
      },
      cms: {
        title: "CMS REST API",
        description:
          "Et REST-API i C# for å administrere innhold og premier, laget som et avansert backend-prosjekt der API-et står sentralt i strukturen.",
        tags: ["C#", ".NET", "REST API"],
      },
      dashboard: {
        title: "Personal Data Dashboard",
        description:
          "Et JavaScript-prosjekt som viser personlige brukerdata i et oversiktlig og brukervennlig dashbord.",
        tags: ["JavaScript", "Dashbord", "Data"],
      },
      ai: {
        title: "AI + C# Integration",
        description:
          "Et eksperiment med å koble kunstig intelligens til en C#-applikasjon og gjøre resultatet til en brukervennlig programvareopplevelse.",
        tags: ["C#", ".NET", "KI"],
      },
    },
  },
  about: {
    eyebrow: "Om meg",
    title: "Nysgjerrig av natur. Praktisk når jeg bygger.",
    introduction:
      "Jeg er Elias, en utvikler som liker å forstå hele produktet – fra grensesnittet folk bruker, til tjenestene og dataene bak.",
    description:
      "Prosjektene mine omfatter React, TypeScript, C#, .NET, API-er og utvikling med containere. Jeg lærer ved å bygge, teste ideer og forbedre detaljene som gjør programvare enklere å bruke og vedlikeholde.",
    cleanCode: "Ryddig kode",
    fullStack: "Fullstack",
    alwaysLearning: "Lærer hele tiden",
  },
  contact: {
    eyebrow: "På GitHub",
    title: "Se mer av det jeg lager.",
    description:
      "Utforsk repositoriene mine for å se hva jeg lager og hvordan jeg jobber.",
    viewGithub: "Se GitHub-profilen min",
  },
  footer: {
    backToTop: "Til toppen",
  },
} satisfies typeof en;

export const homeTranslations = { en, nb };
