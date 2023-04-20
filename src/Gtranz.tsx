import React from "react";
import { TransitionProvider } from "./TransitionContext";
import TransitionLayout from "./TransitionLayout";

// Provider
export const Gtranz = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitionProvider>
      <TransitionLayout>{children}</TransitionLayout>
    </TransitionProvider>
  );
};
