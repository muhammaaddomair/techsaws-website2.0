"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { m as motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Copy, Phone } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/contexts/global-context";
import { businessPhone } from "@/data/contact-data";

export default function CallFlow({ onBack, onSchedule }: { onBack: () => void; onSchedule: () => void }) {
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();
  const { connectSurface } = useGlobalContext();
  const focusPhone = useCallback((node: HTMLAnchorElement | null) => {
    if (!node) return;
    const dialog = node.closest<HTMLElement>("[role=dialog]");
    if (dialog) dialog.scrollTop = 0;
    node.focus({ preventScroll: true });
  }, []);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copyNumber() {
    if (copying) return;
    setCopying(true);
    try {
      await navigator.clipboard.writeText(businessPhone.copy);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Could not copy the number. You can select and copy it directly.", {
        className: `surface-${connectSurface}`,
        style: { background: "var(--surface-card)", color: "var(--surface-heading)", border: "1px solid var(--surface-border)" },
      });
    } finally { setCopying(false); }
  }

  return <motion.div className="mt-2 font-body" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .2 }}>
    <div className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface-card p-4 sm:gap-4 sm:p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-primary"><Phone aria-hidden="true" className="size-5" /></span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-surface-foreground">Business phone</p>
        <p className="mt-1 select-text break-words text-base font-semibold text-surface-heading sm:text-lg">{businessPhone.display}</p>
      </div>
      <button type="button" onClick={copyNumber} disabled={copying} aria-label={copied ? "Phone number copied" : "Copy phone number"} className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-surface-border text-surface-heading transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50">
        {copied ? <Check aria-hidden="true" className="size-5 text-green-600" /> : <Copy aria-hidden="true" className="size-5" />}
      </button>
    </div>
    <span role="status" className="sr-only">{copied ? "Phone number copied to clipboard" : ""}</span>
    <Button asChild className="mt-4 min-h-12 w-full gap-2 rounded-xl font-body"><a ref={focusPhone} href={businessPhone.href}><Phone aria-hidden="true" />Call Now</a></Button>
    {businessPhone.isPlaceholder && <p className="mt-3 text-center text-xs text-surface-foreground">Demo number · business line coming soon.</p>}
    <div className="mt-6 border-t border-surface-border pt-6">
      <p className="text-center text-sm leading-6 text-surface-foreground">Prefer to choose a time? Schedule a consultation instead.</p>
      <button type="button" onClick={onSchedule} className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-surface-border px-4 text-sm font-medium text-surface-heading transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Schedule a Consultation<ArrowUpRight aria-hidden="true" className="size-4" /></button>
    </div>
    <button type="button" onClick={onBack} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-surface-foreground underline underline-offset-4 hover:text-surface-heading focus-visible:outline-2 focus-visible:outline-primary"><ArrowLeft aria-hidden="true" className="size-4" />All contact options</button>
  </motion.div>;
}
