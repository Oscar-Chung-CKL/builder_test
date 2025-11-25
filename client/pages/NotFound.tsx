import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header showGroupDropdown={false} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="heading-xl mb-4">404 - Page Not Found</h1>
        <p className="body-text text-foreground/80 mb-8">
          The page you're looking for doesn't exist or hasn't been implemented yet.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </main>
    </div>
  );
}
