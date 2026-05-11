"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { getStoredToken } from "@/api/axiosClient";

const navLinks = [
  { href: "/#services", label: "Dịch vụ" },
  { href: "/#solutions", label: "Giải pháp" },
  { href: "/#contact", label: "Liên hệ" },
];

function subscribeToken(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === "access_token" || e.key === null) onStoreChange();
  };
  const onFocus = () => onStoreChange();
  window.addEventListener("storage", onStorage);
  window.addEventListener("focus", onFocus);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("focus", onFocus);
  };
}

function getTokenSnapshot() {
  return !!getStoredToken();
}

function getServerTokenSnapshot() {
  return false;
}

export function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hasToken = useSyncExternalStore(subscribeToken, getTokenSnapshot, getServerTokenSnapshot);

  const adminButton = hasToken ? (
    <Button asChild variant="default" className="cursor-pointer bg-cta text-cta-foreground hover:bg-cta/90">
      <Link href="/dashboard" className="inline-flex items-center gap-2">
        <LayoutDashboard className="h-4 w-4" aria-hidden />
        Admin
      </Link>
    </Button>
  ) : null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/90 sm:text-xl"
          >
            <span className="text-cta">Royal</span>
            <span>Tech</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            {adminButton}
          </div>

          <button
            type="button"
            className="cursor-pointer rounded-md p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Mở menu điều hướng"
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </nav>

        {menuOpen ? (
          <div id="mobile-nav" className="border-t border-border/80 px-4 py-4 md:hidden">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="cursor-pointer rounded-md py-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {hasToken ? (
                <Button asChild className="mt-2 w-full cursor-pointer bg-cta text-cta-foreground hover:bg-cta/90">
                  <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center gap-2">
                    <LayoutDashboard className="h-4 w-4" aria-hidden />
                    Admin
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
