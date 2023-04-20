import React from "react";
import { TransitionProvider, useTimeline } from "./TransitionContext";
import TransitionLayout from "./TransitionLayout";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

// Provider
const Gtranz = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitionProvider>
      <TransitionLayout>{children}</TransitionLayout>
    </TransitionProvider>
  );
};

export { useTimeline, useIsomorphicLayoutEffect };
export default Gtranz;
