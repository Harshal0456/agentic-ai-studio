import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold text-foreground">
              ZETUS<span className="text-primary"> AI</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-subtle">
              Your business. Powered by agents.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="text-subtle hover:text-foreground">Home</Link>
            <Link to="/about" className="text-subtle hover:text-foreground">About</Link>
            <Link to="/case-studies" className="text-subtle hover:text-foreground">Case Studies</Link>
            <Link to="/contact" className="text-subtle hover:text-foreground">Contact</Link>
          </div>
          <div className="text-sm">
            <a href="mailto:hello@zetusai.com" className="text-subtle hover:text-foreground">
              hello@zetusai.com
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-subtle">
          © 2026 Zetus AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
