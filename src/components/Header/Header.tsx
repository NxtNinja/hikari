"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Top", href: "/top" },
  { name: "Seasons", href: "/seasons" },
  { name: "Ongoing", href: "/ongoing" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-foreground/20 bg-background shadow-sm">
      <div className="mx-auto flex h-[52px] max-w-screen-xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold uppercase tracking-widest">
          Hikari
        </Link>
        <div className="hidden items-center justify-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-bold text-lg transition-colors ${
                pathname === link.href ? "font-bold text-primary" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <nav className="flex items-center gap-6">
          <ThemeToggleButton />
          <div className="flex items-center justify-center sm:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-12">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`hover:text-bold text-lg transition-colors ${
                        pathname === link.href ? "font-bold text-primary" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
