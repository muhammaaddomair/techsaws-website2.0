"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 font-body" id="newsletter">
      <label htmlFor="newsletter-email" className="sr-only">Work email address</label>
      <div className="flex flex-col gap-1 rounded-2xl border border-surface-border bg-surface-card p-1.5 transition-colors duration-300 focus-within:border-ring min-[400px]:flex-row min-[400px]:items-center min-[400px]:gap-0 min-[400px]:rounded-full">
        <input id="newsletter-email" name="email" type="email" autoComplete="email" required placeholder="Enter your work email" className="newsletter-email w-full min-w-0 flex-1 rounded-xl min-[400px]:w-auto min-[400px]:rounded-full bg-transparent px-4 py-2.5 font-body text-sm text-surface-heading outline-none placeholder:text-surface-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0" onChange={() => submitted && setSubmitted(false)} />
        <button type="submit" className="group flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-4 font-body text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-300 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring min-[400px]:w-auto sm:px-5">
          Subscribe
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
      <p aria-live="polite" className={`mt-3 flex min-h-5 items-center gap-1.5 text-xs transition-opacity duration-300 ${submitted ? "text-accent opacity-100" : "opacity-0"}`}>
        <Check aria-hidden="true" className="h-3.5 w-3.5" />
        Thanks, we&apos;ll keep you in the loop.
      </p>
    </form>
  );
}
