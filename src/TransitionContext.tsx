import React, { createContext, useContext, useState } from "react";
import gsap from "gsap";

interface TransitionContextProps {
  timeline: gsap.core.Timeline | null;
}

// create context api
export const TransitionContext = createContext<TransitionContextProps>({
  timeline: null,
});

// create context provider
export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [timeline] = useState(gsap.timeline({ paused: true }));

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

// wrap useContext and check for null
export const useTimeline = () => {
  const { timeline } = useContext(TransitionContext);

  if (timeline === undefined || timeline === null) {
    throw new Error("Should use timeline within Provider(Gtranz)");
  }
  return timeline;
};
