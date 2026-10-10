import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { FooterNavData } from "@/data/layout-data";

import NewsletterForm from "./newsletter-form";

import Logo from "../../../public/favicons/logo.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/techsaws",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    colorClass: "border-[#0a66c2] bg-[#0a66c2]",
  },
  {
    href: "https://twitter.com/techsaws",
    label: "X",
    icon: FaXTwitter,
    colorClass: "border-surface-border bg-surface-muted",
  },
  {
    href: "https://www.instagram.com/techsaws/",
    label: "Instagram",
    icon: FaInstagram,
    colorClass: "border-[#d62976] bg-[#d62976]",
  },
  {
    href: "https://www.youtube.com/@techsaws",
    label: "YouTube",
    icon: FaYoutube,
    colorClass: "border-[#ff0000] bg-[#ff0000]",
  },
].filter((item): item is typeof item & { href: string } => Boolean(item.href));

function Footer() {
  return (
    <footer
      className="surface-dark relative overflow-hidden font-body text-surface-foreground"
      style={{ clipPath: "polygon(0% 0,100% 0%,100% 100%,0 100%)" }}
    >
      <div className="relative page-layout pt-[var(--section-space)]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-14 md:gap-y-14 lg:grid-cols-4 xl:grid-cols-[0.65fr_0.8fr_0.9fr_1.15fr_1.55fr] xl:gap-x-10 xl:pb-20">
          <Link
            href="/"
            aria-label="TechSaws home"
            className="w-fit self-start rounded-full transition-transform duration-500 hover:scale-105 max-md:col-span-2 max-md:justify-self-center"
          >
            <Image src={Logo} alt="TechSaws" sizes="112px" className="h-auto w-28 md:w-24" />
          </Link>

          {FooterNavData.map((category) => (
            <nav key={category.title} aria-label={`${category.title} links`} className={category.title.toLowerCase() === "services" ? "max-md:col-span-2" : "col-span-1"}>
              <h3 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-surface-heading">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="group inline-flex items-center gap-1.5 font-body text-sm font-medium leading-5 text-surface-foreground hover:text-surface-heading"
                    >
                      {item.title}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <section
            aria-labelledby="newsletter-heading"
            className="col-span-2 lg:col-span-4 xl:col-span-1 xl:pl-2"
          >
            <h3 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-surface-heading">
              The signal, not the noise
            </h3>
            <h2
              id="newsletter-heading"
              className="font-heading text-xl font-semibold tracking-tight text-surface-heading"
            >
              Ideas built for what&apos;s next.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-surface-foreground">
              Practical insights on AI, software, growth, and digital security.
              Delivered occasionally.
            </p>

            <NewsletterForm />

            <div className="mt-3 flex flex-wrap items-center gap-2 max-md:justify-center max-md:gap-4">
              {socialLinks.map(({ href, label, icon: Icon, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  title={label}
                  className={`group flex h-10 w-10 items-center justify-center rounded-full border text-white transition-all duration-300 hover:-translate-y-1 hover:border-surface-border hover:bg-surface-muted hover:text-surface-foreground hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${colorClass}`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4 border-t border-surface-border py-5 text-sm font-body font-medium text-surface-foreground max-md:text-center md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-surface-foreground">
            &copy; {new Date().getFullYear()} TechSaws. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 max-md:justify-center">
            <Link href="/privacy" className="hover:text-surface-heading">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-surface-heading">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none mt-4 px-3 sm:px-5 lg:px-8">
        <svg viewBox="0 0 1000 160" className="block h-auto w-full font-heading font-bold text-surface-heading">
          <text x="5" y="148" fontSize="200" textLength="990" lengthAdjust="spacingAndGlyphs" fill="currentColor" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" paintOrder="stroke" opacity="0.14">
            TECHSAWS
          </text>
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
