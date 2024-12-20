"use client";

import { createContext, useContext } from "react";

type OutletContextType<T> = T | undefined;

const OutletContext = createContext<OutletContextType<unknown>>(undefined);

export const useOutletContext = () => {
  const context = useContext(OutletContext);
  if (!context) {
    throw new Error("useOutletContext must be used within a OutletProvider");
  }
  return context;
};

export const OutletProvider = OutletContext.Provider;
