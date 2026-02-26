import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-violet-950/40 backdrop-blur-xl py-12 text-gray-200">
      <div className="w-[80%] max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {site.social.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded text-sm"
            >
              <span className="relative inline-block w-5 h-5 shrink-0">
                <Image
                  src={link.image}
                  alt=""
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <p className="m-0">
          Copyright &copy; {year} {site.name} | {site.company}
        </p>
        <p className="m-0 mt-2">
          Designed &amp; Developed by{" "}
          <Link
            href={site.credits.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-neon transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded"
          >
            {site.credits.name}
          </Link>
        </p>
      </div>
    </footer>
  );
}
