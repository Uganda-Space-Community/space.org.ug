"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteIdentity } from "@/lib/constants";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/community", label: "Community" },
  { href: "/activities", label: "Activities" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/wsw-2026", label: "WSW 2026" },
  { href: "/join", label: "Join" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link className="flex min-w-0 items-center gap-3" href="/" onClick={() => setMenuOpen(false)}>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-ink p-1.5">
              <Image
                alt=""
                aria-hidden="true"
                className="size-full object-contain"
                height={40}
                priority
                src="/assets/space-uganda-logo-mark-256.png"
                width={40}
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-black text-ink">{siteIdentity.name}</span>
              <span className="block truncate text-xs font-semibold uppercase tracking-normal text-ink/55">
                Uganda&apos;s Space Launchpad
              </span>
            </span>
          </Link>

          <button
            aria-controls="mobile-primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex size-11 items-center justify-center rounded-md border border-black/10 bg-white text-ink shadow-sm transition hover:border-ugandaGold hover:text-ugandaRed md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>

          <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  className={`rounded-md px-3 py-2 text-sm font-bold transition ${
                    active ? "bg-white text-ink" : "text-ink/70 hover:bg-white hover:text-ink"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {menuOpen ? (
          <nav
            aria-label="Mobile primary navigation"
            className="mt-4 grid gap-2 rounded-lg border border-black/10 bg-white p-2 shadow-lg md:hidden"
            id="mobile-primary-navigation"
          >
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  className={`rounded-md px-4 py-3 text-sm font-black transition ${
                    active ? "bg-ink text-ugandaGold" : "text-ink/75 hover:bg-paper hover:text-ink"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
