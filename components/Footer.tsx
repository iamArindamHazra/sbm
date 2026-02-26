import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-violet-950/40 backdrop-blur-xl py-12 text-gray-200">
      <div className="w-[80%] max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {site.social.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="inline-flex items-center gap-0.5 text-gray-300 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded text-sm"
            >
              <SocialIcon
                url={link.href}
                as="span"
                bgColor="transparent"
                fgColor="currentColor"
                className="[&_.social-svg-icon]:!fill-current"
                style={{ width: 32, height: 32, display: "inline-block" }}
              />
              <span>{link.name}</span>
            </a>
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
            className="text-accent hover:text-neon underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded"
          >
            {site.credits.name}
          </Link>
        </p>
      </div>
    </footer>
  );
}
