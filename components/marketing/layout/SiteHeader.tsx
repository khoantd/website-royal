"use client";

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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SERVICE_OFFERINGS } from "@/lib/data/marketing-services";

const NAV = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Liên hệ" },
];

function LogoMark() {
  return (
    <img
      src="/images/logo-royal.png"
      alt="RoyalTech"
      width={48}
      height={48}
      className="shrink-0 h-12 w-12"
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}

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
        "relative text-[0.9375rem] font-semibold text-zinc-600 transition-colors hover:text-zinc-900",
        active && "text-zinc-900"
      )}
    >
      {children}
      {active ? (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white0 to-transparent" />
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/90 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-zinc-900">
            Royal<span className="text-zinc-500">Tech</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 bg-transparent text-[0.9375rem] font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 data-[state=open]:bg-zinc-100">
                  Dịch vụ
                </NavigationMenuTrigger>
                <NavigationMenuContent className="left-0 top-full z-50 mt-2 w-[min(calc(100vw-2rem),560px)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-xl md:w-[min(calc(100vw-2rem),560px)] md:p-5">
                  <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                    {SERVICE_OFFERINGS.map((s) => (
                      <NavigationMenuLink key={s.slug} asChild>
                        <Link
                          href={`/services/${s.slug}`}
                          className={cn(
                            "flex flex-row gap-3 rounded-lg border border-transparent p-3 text-left transition-colors hover:border-brand-sky hover:bg-zinc-50",
                            pathname === `/services/${s.slug}` && "border-brand-sky bg-brand-sky/30"
                          )}
                        >
                          <div
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-lg",
                              s.gradient,
                              s.iconGlow
                            )}
                          >
                            <s.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-zinc-900">{s.shortTitle}</div>
                            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-zinc-500">{s.description}</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <Link href="/services" className="mt-4 block text-center text-sm font-medium text-brand-navy hover:text-brand-navy">
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
          <div className="rounded-lg bg-gradient-to-r from-[#161E54] to-[#FF986A] p-[1px] shadow-md shadow-brand-orange/20">
            <Button asChild className="h-10 rounded-[7px] border-0 bg-white px-5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
              <Link href="/contact">Nhận Tư Vấn Miễn Phí</Link>
            </Button>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-zinc-800" aria-label="Mở menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100vw,380px)] border-zinc-200 bg-white p-0">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/services" className="text-base font-semibold text-zinc-900">
                Dịch vụ
              </Link>
              <div className="flex flex-col gap-3 border-l border-zinc-200 pl-4">
                {SERVICE_OFFERINGS.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="text-[0.9375rem] text-zinc-600 hover:text-zinc-900">
                    {s.title}
                  </Link>
                ))}
              </div>
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="text-[0.9375rem] font-medium text-zinc-600 hover:text-zinc-900">
                  {item.label}
                </Link>
              ))}
              <div className="rounded-lg bg-gradient-to-r from-[#161E54] to-[#FF986A] p-[1px]">
                <Button asChild className="w-full rounded-[7px] bg-white text-zinc-900 hover:bg-zinc-50">
                  <Link href="/contact">Nhận Tư Vấn Miễn Phí</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
