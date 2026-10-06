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
import { useLanguage } from "@/i18n/use-language";

const skills = [
  {
    id: "csharp",
    icon: ServerCog,
  },
  {
    id: "react",
    icon: Braces,
  },
  {
    id: "data",
    icon: Database,
  },
  {
    id: "docker",
    icon: Container,
  },
] as const;

const projects = [
  {
    id: "ecommerce",
    href: "https://github.com/elias-kodehode/ECommerce",
    number: "01",
  },
  {
    id: "gutendex",
    href: "https://github.com/elias-kodehode/gutendexv2",
    number: "02",
  },
  {
    id: "cms",
    href: "https://github.com/elias-kodehode/cms-rest-api",
    number: "03",
  },
  {
    id: "dashboard",
    href: "https://github.com/elias-kodehode/personlig-data-dashboard",
    number: "04",
  },
  {
    id: "ai",
    href: "https://github.com/elias-kodehode/csharp-ai-integration",
    number: "05",
  },
] as const;

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
  const { t } = useLanguage();
  const copy = t.home.hero;

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-6 py-20 sm:px-8"
    >
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {copy.role}
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          {copy.greeting}
        </p>
        <h1 className="font-heading text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          {copy.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          {copy.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {copy.viewWork}
            <ArrowDown className="h-4 w-4" />
          </button>
          <a
            href="https://github.com/elias-kodehode"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border bg-background px-6 py-3 font-medium transition hover:bg-accent"
          >
            <GitBranch className="h-4 w-4" />
            {copy.githubProfile}
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
  const { t } = useLanguage();
  const copy = t.home.skills;

  return (
    <section id="skills" className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ id, icon: Icon }) => (
            <article key={id} className="bg-card p-7 sm:p-8">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border bg-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{copy.items[id].title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {copy.items[id].description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { t } = useLanguage();
  const copy = t.home.projects;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <a
          href="https://github.com/elias-kodehode?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:underline"
        >
          {copy.allRepositories}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.id}
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
              <h3 className="font-heading text-3xl font-semibold">
                {copy.items[project.id].title}
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                {copy.items[project.id].description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {copy.items[project.id].tags.map((tag) => (
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
  const { t } = useLanguage();
  const copy = t.home.about;

  return (
    <section id="about" className="border-y bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-60">
            {copy.eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
            {copy.title}
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 opacity-80">
          <p>{copy.introduction}</p>
          <p>{copy.description}</p>
          <div className="grid grid-cols-2 gap-4 pt-5 sm:grid-cols-3">
            <AboutItem icon={Code2} label={copy.cleanCode} />
            <AboutItem icon={Layers3} label={copy.fullStack} />
            <AboutItem icon={Sparkles} label={copy.alwaysLearning} />
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
  const { t } = useLanguage();
  const copy = t.home.contact;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
      <div className="relative overflow-hidden rounded-3xl border bg-card px-7 py-16 text-center shadow-sm sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            {copy.description}
          </p>
          <a
            href="https://github.com/elias-kodehode"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <GitBranch className="h-4 w-4" />
            {copy.viewGithub}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Elias Sørensen</span>
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="inline-flex items-center gap-2 transition hover:text-foreground"
        >
          {t.home.footer.backToTop}
          <ArrowDown className="h-4 w-4 rotate-180" />
        </button>
      </div>
    </footer>
  );
}
