import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import gsap from "gsap";

interface TransitionContextProps {
  timeline: gsap.core.Timeline | null;
  setTimeline: Dispatch<SetStateAction<gsap.core.Timeline>> | null;
}

export const TransitionContext = createContext<TransitionContextProps>({
  timeline: null,
  setTimeline: null,
});

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};
