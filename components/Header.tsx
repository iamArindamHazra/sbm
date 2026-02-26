"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Order Now" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none">
      <div className="fixed top-3 inset-x-0 z-[100] px-3 sm:px-4">
        <nav
          className={`pointer-events-auto flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 backdrop-blur-xl transition-all duration-150 ${
            menuOpen
              ? "ml-auto mr-3 max-w-[75%] rounded-none border-none bg-violet-950/90 shadow-none sm:mx-auto sm:max-w-6xl"
              : "mx-auto max-w-6xl rounded-full border border-white/10 bg-violet-950/40 shadow-[0_14px_40px_rgba(0,0,0,0.55)]"
          }`}
        >
          <Link
            href="#home"
            className="flex items-center gap-2 font-bold text-lg text-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/img/logo2.webp"
              alt="Sonar Bangla Muri"
              width={48}
              height={48}
              className="block h-12 w-12"
            />
            <span className="hidden text-sm font-semibold tracking-wide text-gray-100/90 xs:inline">
              Sonar Bangla Muri
            </span>
          </Link>

          <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="text-sm font-medium text-gray-100 no-underline hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {!menuOpen && (
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md shadow-accent/40 transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:hidden"
                onClick={() => setMenuOpen(false)}
              >
                Order now
              </Link>
            )}

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-gray-100 hover:bg-white/10 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay and drawer */}
      <button
        type="button"
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        aria-label="Close menu overlay"
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`fixed inset-y-0 right-0 z-50 flex w-[80%] max-w-sm transform flex-col border-l border-white/10 bg-violet-950/90 px-8 pb-10 pt-24 backdrop-blur-xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile main navigation"
      >
        <ul className="m-0 list-none space-y-4 text-left">
          {navLinks.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <Link
                href={"#t"}
                className="block text-lg font-medium text-gray-100 no-underline hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
                // onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
