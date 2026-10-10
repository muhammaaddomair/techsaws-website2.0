import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ConnectPage() {
  return <section className="surface-light min-h-[70dvh] pb-24 pt-44 sm:pt-52" aria-labelledby="connect-heading">
    <div className="page-layout">
      <p className="mb-5 font-body text-sm font-medium text-primary">LET’S CONNECT</p>
      <h1 id="connect-heading" className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-surface-heading sm:text-5xl">Tell us what you’re working on.</h1>
      <p className="mt-6 max-w-xl font-body leading-7 text-surface-foreground">Share your goals, challenges, or project idea. We’ll help you figure out the next step.</p>
      <Button asChild className="mt-8 h-auto min-h-12 gap-3 rounded-xl px-6 py-3.5 font-body"><a href="mailto:techsaws.core@gmail.com"><Mail aria-hidden="true" />Email TechSaws<ArrowUpRight aria-hidden="true" /></a></Button>
      <p className="mt-4 font-body text-sm text-surface-foreground">techsaws.core@gmail.com</p>
    </div>
  </section>;
}