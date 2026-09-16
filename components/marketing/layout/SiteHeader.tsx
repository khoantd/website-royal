"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";
import { SERVICE_OFFERINGS } from "@/lib/data/marketing-services";

const NAV = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "relative text-[0.9375rem] font-semibold text-white/70 transition-colors duration-200 hover:text-white",
        active && "text-white"
      )}
    >
      {children}
      {active ? (
        <span
          className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md transition-[background-color,box-shadow] duration-200",
        scrolled
          ? "bg-[#0A1931]/95 shadow-lg shadow-black/20 supports-[backdrop-filter]:bg-[#0A1931]/90"
          : "bg-[#0A1931]/85 supports-[backdrop-filter]:bg-[#0A1931]/75"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center"
          aria-label="Royal Solution — trang chủ"
        >
          <BrandLogo height={32} plate={false} className="sm:hidden" />
          <BrandLogo height={36} plate={false} className="hidden sm:inline-flex" />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent text-[0.9375rem] font-semibold text-white/70 hover:bg-white/10 hover:text-white focus:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white">
                  Dịch vụ
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-full z-50 mt-2 w-[min(calc(100vw-2rem),560px)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-xl md:w-[min(calc(100vw-2rem),560px)] md:p-5">
                  <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                    {SERVICE_OFFERINGS.map((s) => (
                      <NavigationMenuLink key={s.slug} asChild>
                        <Link
                          href={`/services/${s.slug}`}
                          className={cn(
                            "flex min-w-0 flex-row gap-3 rounded-lg border border-transparent p-3 text-left transition-colors hover:border-[#C5A059]/40 hover:bg-[#E8EEF5]/50",
                            pathname === `/services/${s.slug}` && "border-[#C5A059]/40 bg-[#E8EEF5]/60"
                          )}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A1931] shadow-lg shadow-[#C5A059]/25">
                            <s.icon className="h-5 w-5 text-[#D4AF37]" aria-hidden />
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-zinc-900">{s.shortTitle}</div>
                            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-zinc-500">{s.description}</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="mt-4 block text-center text-sm font-medium text-brand-navy hover:text-[#C5A059]"
                  >
                    Xem tất cả dịch vụ →
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-5 flex items-center gap-8">
            {NAV.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="h-10 min-h-10 cursor-pointer rounded-xl bg-cta px-5 text-sm font-semibold text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931]"
          >
            <Link href="/contact">Nhận Tư Vấn Miễn Phí</Link>
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="size-11 shrink-0 text-white hover:bg-white/10 hover:text-white"
              aria-label="Mở menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[min(100vw,380px)] flex-col overflow-y-auto border-zinc-200 bg-white p-0"
          >
            <SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
            <nav className="flex flex-1 flex-col gap-1 p-6 pt-14" aria-label="Mobile">
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
              >
                Dịch vụ
              </Link>
              <div className="mb-2 flex flex-col border-l border-zinc-200 py-1 pl-3">
                {SERVICE_OFFERINGS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2.5 text-[0.9375rem] text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-[0.9375rem] font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 h-12 w-full cursor-pointer rounded-xl bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Nhận Tư Vấn Miễn Phí
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
