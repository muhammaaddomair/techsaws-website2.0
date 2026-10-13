"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function FooterNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group inline-flex items-center gap-1.5 font-body text-sm font-medium leading-5 hover:text-surface-heading ${active ? "text-surface-heading underline decoration-primary decoration-[3px] underline-offset-4" : "text-surface-foreground"}`}
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
