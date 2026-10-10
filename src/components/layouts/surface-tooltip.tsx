"use client";

import type { ReactNode } from "react";
import { useElementSurface } from "@/hooks/use-element-surface";

export default function SurfaceTooltip({ children, className }: { children: ReactNode; className: string }) {
  const { elementRef, surface } = useElementSurface();
  return (
    <span ref={elementRef} role="tooltip" className={`surface-${surface} surface-tooltip pointer-events-none absolute whitespace-nowrap rounded-md px-2.5 py-1.5 font-body text-xs opacity-0 shadow-sm transition-[opacity,background-color,color] duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${className}`}>
      {children}
    </span>
  );
}
