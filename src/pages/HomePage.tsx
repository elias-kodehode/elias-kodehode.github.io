import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Container,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    title: "C# & .NET",
    description: "APIs, authentication, LINQ, and maintainable backend services.",
    icon: ServerCog,
  },
  {
    title: "TypeScript & React",
    description: "Responsive interfaces built with reusable, accessible components.",
    icon: Braces,
  },
  {
    title: "Data & APIs",
    description: "REST integrations, structured data, and end-to-end application flows.",
    icon: Database,
  },
  {
    title: "Docker & Aspire",
    description: "Local orchestration and consistent development environments.",
    icon: Container,
  },
];

const projects = [
  {
    title: "Gutendex v2",
    description:
      "A TypeScript application built around the Gutendex book catalogue API, focused on discovering and working with public book data.",
    tags: ["TypeScript", "React", "REST API"],
    href: "https://github.com/elias-kodehode/gutendexv2",
    number: "01",
  },
  {
    title: "CMS REST API",
    description:
      "A C# REST API for managing content and prizes, created as an advanced backend project with a clear API-first structure.",
    tags: ["C#", ".NET", "REST API"],
    href: "https://github.com/elias-kodehode/cms-rest-api",
    number: "02",
  },
  {
    title: "Personal Data Dashboard",
    description:
      "A JavaScript dashboard project focused on presenting personal user data through a clear, usable interface.",
    tags: ["JavaScript", "Dashboard", "Data"],
    href: "https://github.com/elias-kodehode/personlig-data-dashboard",
    number: "03",
  },
  {
    title: "AI + C# Integration",
    description:
      "An experiment in connecting AI capabilities to a C# application and shaping the result into a usable software experience.",
    tags: ["C#", ".NET", "AI"],
    href: "https://github.com/elias-kodehode/csharp-ai-integration",
    number: "04",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-6 py-20 sm:px-8"
    >
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Full-stack developer
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Hello, I&apos;m Elias Sørensen
        </p>
        <h1 className="font-heading text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          I build useful software for the web.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          I work across modern frontends and .NET backends, turning ideas into
          clear, dependable digital products.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            View my work
            <ArrowDown className="h-4 w-4" />
          </button>
          <a
            href="https://github.com/elias-kodehode"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border bg-background px-6 py-3 font-medium transition hover:bg-accent"
          >
            <GitBranch className="h-4 w-4" />
            GitHub profile
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="What I work with"
          title="From interface to infrastructure."
          description="A practical toolkit for building complete web applications, with an emphasis on readable code and reliable foundations."
        />
        <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, description, icon: Icon }) => (
            <article key={title} className="bg-card p-7 sm:p-8">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border bg-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that show how I build."
          description="A selection of frontend, backend, and full-stack work from my public GitHub repositories."
        />
        <a
          href="https://github.com/elias-kodehode?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:underline"
        >
          All repositories
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-80 flex-col rounded-3xl border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl sm:p-9"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-sm text-muted-foreground">
                {project.number}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border transition group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-auto pt-12">
              <h3 className="font-heading text-3xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-60">
            About me
          </p>
          <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
            Curious by nature. Practical by choice.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 opacity-80">
          <p>
            I&apos;m Elias, a developer who enjoys understanding the whole product—from
            the interface people use to the services and data behind it.
          </p>
          <p>
            My projects span React, TypeScript, C#, .NET, APIs, and containerized
            development. I learn by building, testing ideas, and improving the details
            that make software easier to use and maintain.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-5 sm:grid-cols-3">
            <AboutItem icon={Code2} label="Clean code" />
            <AboutItem icon={Layers3} label="Full stack" />
            <AboutItem icon={Sparkles} label="Always learning" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutItem({ icon: Icon, label }: { icon: typeof Code2; label: string }) {
  return (
    <div className="border-t border-primary-foreground/20 pt-4">
      <Icon className="mb-3 h-5 w-5" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
      <div className="relative overflow-hidden rounded-3xl border bg-card px-7 py-16 text-center shadow-sm sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Let&apos;s connect
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            Have a project or opportunity in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Take a look at my work and get in touch through GitHub. I&apos;d be happy to
            hear what you&apos;re building.
          </p>
          <a
            href="https://github.com/elias-kodehode"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <GitBranch className="h-4 w-4" />
            Connect on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Elias Sørensen</span>
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="inline-flex items-center gap-2 transition hover:text-foreground"
        >
          Back to top
          <ArrowDown className="h-4 w-4 rotate-180" />
        </button>
      </div>
    </footer>
  );
}
