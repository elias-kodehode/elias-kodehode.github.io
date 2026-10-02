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
import { GitBranch, Menu } from "lucide-react";

const navigation = [
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

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
  return (
    <nav
      className={[
        "mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      ].join(" ")}
    >
      <Link
        to="/"
        onClick={() => scrollToSection("home")}
        className="font-heading text-xl font-semibold tracking-tight"
      >
        Elias Sørensen
      </Link>

      <div className="hidden items-center gap-1 md:flex">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            {item.label}
          </button>
        ))}
        <a
          href="https://github.com/elias-kodehode"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border transition hover:bg-accent"
        >
          <GitBranch className="h-4 w-4" />
        </a>
        <HamburgerDropdown />
      </div>

      <div className="md:hidden">
        <HamburgerDropdown />
      </div>
    </nav>
  );
}

function HamburgerDropdown() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="icon" className="rounded-2xl" />
        }
      >
        <Menu />
        <span className="sr-only">Open menu</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="rounded-none">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Navigate</DropdownMenuLabel>
          {navigation.map((item) => (
            <DropdownMenuItem
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Social</DropdownMenuLabel>

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
          <DropdownMenuLabel>Theme</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
