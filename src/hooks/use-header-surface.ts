"use client";

import { useElementSurface } from "./use-element-surface";

export function useHeaderSurface() {
  const { elementRef, surface } = useElementSurface();
  return { headerRef: elementRef, surface };
}
