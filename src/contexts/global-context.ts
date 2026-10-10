"use client";

import { createContext, useContext, type RefObject } from "react";

export type GlobalContextValue = {
  isConnectModalOpen: boolean;
  connectSurface: "dark" | "light";
  connectReturnFocus: RefObject<HTMLElement | null>;
  openConnectModal: (trigger?: HTMLElement) => void;
  closeConnectModal: () => void;
};

export const GlobalContext = createContext<GlobalContextValue | undefined>(
  undefined,
);

export function useGlobalContext(): GlobalContextValue {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}
