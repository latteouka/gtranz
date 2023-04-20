import React, { useContext } from "react";
import { TransitionContext, TransitionProvider } from "./TransitionContext";
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

// timeline
const useTimeline = () => {
  const { timeline } = useContext(TransitionContext);

  if (timeline === undefined || timeline === null) {
    throw new Error("You should use context within Provider(Gransition)");
  }
  return timeline;
};

export { useTimeline, useIsomorphicLayoutEffect };
export default Gtranz;
