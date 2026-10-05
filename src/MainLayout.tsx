import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./components/ui/button";
import { useTheme } from "./components/theme-provider";
import { useLanguage } from "./i18n/use-language";
import { GitBranch, Languages, Menu } from "lucide-react";

const navigation = ["skills", "projects", "about", "contact"] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function MainLayout() {
  const mainRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    const handleScroll = () => {
      setScrolled(main.scrollTop > 10);
    };

    main.addEventListener("scroll", handleScroll);

    return () => {
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <header
        className={[
          "z-50 shrink-0 border-b transition-all duration-300",
          scrolled
            ? "bg-background/80 shadow-sm backdrop-blur-xl"
            : "bg-background",
        ].join(" ")}
      >
        <NavBar scrolled={scrolled} />
      </header>

      <main ref={mainRef} className="min-h-0 flex-1 overflow-y-auto scroll-smooth">
        <Outlet />
      </main>
    </div>
  );
}

function NavBar({ scrolled }: { scrolled: boolean }) {
  const { t } = useLanguage();

  return (
    <nav
      className={[
        "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6",
        scrolled ? "py-3" : "py-5",
      ].join(" ")}
    >
      <Link
        to="/"
        onClick={() => scrollToSection("home")}
        className="shrink-0 font-heading text-base font-semibold tracking-tight sm:text-xl"
      >
        Elias Sørensen
      </Link>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              {t.nav[id]}
            </button>
          ))}
          <a
            href="https://github.com/elias-kodehode"
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.github}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border transition hover:bg-accent"
          >
            <GitBranch className="h-4 w-4" />
          </a>
        </div>
        <LanguageSwitch />
        <HamburgerDropdown />
      </div>
    </nav>
  );
}

function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();
  const nextLanguage = language === "en" ? "nb" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={t.menu.switchLanguage}
      title={t.menu.switchLanguage}
      className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full border px-3 text-sm font-medium transition hover:bg-accent"
    >
      <Languages aria-hidden="true" className="hidden h-4 w-4 sm:block" />
      <span lang={nextLanguage}>{nextLanguage === "nb" ? "Norsk" : "English"}</span>
    </button>
  );
}

function HamburgerDropdown() {
  const { setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="icon" className="rounded-2xl" />
        }
      >
        <Menu />
        <span className="sr-only">{t.menu.open}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="rounded-none">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.menu.navigate}</DropdownMenuLabel>
          {navigation.map((id) => (
            <DropdownMenuItem
              key={id}
              onClick={() => scrollToSection(id)}
            >
              {t.nav[id]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.menu.social}</DropdownMenuLabel>

          <DropdownMenuItem>
            <a
              href="https://github.com/elias-kodehode"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>{t.menu.theme}</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setTheme("light")}>
            {t.menu.light}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("dark")}>
            {t.menu.dark}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("system")}>
            {t.menu.system}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
