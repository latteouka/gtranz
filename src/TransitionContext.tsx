import React, { createContext, useMemo } from "react";
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
