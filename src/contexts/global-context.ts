"use client";

import { createContext, useContext } from "react";

export type GlobalContextValue = {
  isConnectModalOpen: boolean;
  openConnectModal: () => void;
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
