import React from "react";
import { TransitionProvider } from "./TransitionContext";
import TransitionLayout from "./TransitionLayout";

export const Gtranz = ({ children }: { children: React.ReactNode }) => (
  <TransitionProvider>
    <TransitionLayout>{children}</TransitionLayout>
  </TransitionProvider>
);
