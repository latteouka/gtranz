import React, { createContext, useContext, useMemo } from "react";
import gsap from "gsap";

interface TransitionContextProps {
  timeline: gsap.core.Timeline | null;
}

export const TransitionContext = createContext<TransitionContextProps>({
  timeline: null,
});

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  return (
    <TransitionContext.Provider
      value={{
        timeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTimeline = () => {
  const { timeline } = useContext(TransitionContext);

  if (timeline === undefined || timeline === null) {
    throw new Error("You should use context within Provider(Gtranz)");
  }
  return timeline;
};
