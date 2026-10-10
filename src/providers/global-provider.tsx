"use client";

import { useState, type ReactNode } from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { GlobalContext } from "@/contexts/global-context";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <GlobalContext.Provider
          value={{
            isConnectModalOpen,
            openConnectModal: () => setIsConnectModalOpen(true),
            closeConnectModal: () => setIsConnectModalOpen(false),
          }}
        >
          {children}
        </GlobalContext.Provider>
      </MotionConfig>
    </LazyMotion>
  );
}
