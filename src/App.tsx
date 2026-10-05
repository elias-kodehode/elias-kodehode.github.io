import { Link, Route, Routes } from "react-router";
import MainLayout from "./MainLayout";
import HomePage from "./pages/HomePage";
import { useLanguage } from "./i18n/use-language";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold">{t.notFound.title}</h1>
      <p className="mt-4 text-muted-foreground">
        {t.notFound.description}
      </p>
      <Link to="/" className="mt-6 inline-block text-primary underline">
        {t.notFound.back}
      </Link>
    </section>
  );
}
