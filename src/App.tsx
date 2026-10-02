import { Link, Route, Routes } from "react-router";
import MainLayout from "./MainLayout";
import HomePage from "./pages/HomePage";

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
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 inline-block text-primary underline">
        Back to home
      </Link>
    </section>
  );
}
