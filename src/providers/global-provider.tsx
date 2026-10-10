"use client";

import { useState, useRef, type ReactNode } from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { GlobalContext } from "@/contexts/global-context";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [connectSurface, setConnectSurface] = useState<"dark" | "light">("dark");
  const connectReturnFocus = useRef<HTMLElement | null>(null);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <GlobalContext.Provider
          value={{
            isConnectModalOpen,
            connectSurface,
            connectReturnFocus,
            openConnectModal: (trigger) => {
              const opener = trigger instanceof HTMLElement ? trigger : document.activeElement as HTMLElement | null;
              connectReturnFocus.current = opener;
              const region = opener?.closest(".surface-light, .surface-dark") ?? document.querySelector(".site-header[data-surface]");
              setConnectSurface(region?.classList.contains("surface-light") ? "light" : "dark");
              setIsConnectModalOpen(true);
            },
            closeConnectModal: () => setIsConnectModalOpen(false),
          }}
        >
          {children}
        </GlobalContext.Provider>
      </MotionConfig>
    </LazyMotion>
  );
}
