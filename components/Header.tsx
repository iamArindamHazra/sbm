"use client";

import { useState } from "react";
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

  const navBase =
    "fixed top-4 left-0 right-0 w-[80%] max-w-6xl mx-auto z-[100] flex justify-evenly items-center transition-all duration-200 overflow-x-hidden border border-white/10 backdrop-blur-xl rounded-full";
  const navScrolled = "bg-violet-950/30 shadow-none py-4 px-4";
  const navClass = menuOpen
    ? `${navBase} bg-transparent shadow-none py-4 px-4`
    : `${navBase} ${navScrolled}`;

  return (
    <header className="overflow-x-hidden">
      <nav className={navClass}>
        <Link
          href="#home"
          className={`ml-4 font-bold text-lg flex-shrink-0 transition-transform duration-200 ${menuOpen ? "translate-x-24" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/img/logo2.webp"
            alt="Sonar Bangla Muri"
            width={50}
            height={50}
            className="block"
          />
        </Link>
        <div className="flex justify-evenly items-center gap-4 flex-1 max-w-4xl mx-auto">
          {navLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="hidden md:flex items-center text-gray-100 no-underline hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="md:hidden mr-6 text-2xl text-gray-100 hover:text-accent p-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-accent"
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
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 z-50 w-[80%] max-w-sm h-full pt-20 transition-[visibility] duration-300 border-l border-white/10 bg-violet-950/80 backdrop-blur-xl ${
          menuOpen ? "visible" : "invisible"
        }`}
        style={{ visibility: menuOpen ? "visible" : "hidden" }}
      >
        <ul className="list-none m-0 pl-0 text-left">
          {navLinks.map((link) => (
            <li key={`${link.href}-${link.label}`} className="py-4 pl-10">
              <Link
                href={link.href}
                className="text-gray-100 no-underline text-xl hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset rounded"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
