import React, { useContext } from "react";
import { TransitionContext, TransitionProvider } from "./TransitionContext";
import TransitionLayout from "./TransitionLayout";

export const Gransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitionProvider>
      <TransitionLayout>{children}</TransitionLayout>
    </TransitionProvider>
  );
};

export const useTimeline = () => {
  const { timeline } = useContext(TransitionContext);

  if (timeline === undefined || timeline === null) {
    throw new Error("You should use context within Provider(Gransition)");
  }
  return timeline;
};
