import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import gsap from "gsap";

interface TransitionContextProps {
  timeline: gsap.core.Timeline | null;
  setTimeline: Dispatch<SetStateAction<gsap.core.Timeline>> | null;
}

const TransitionContext = createContext<TransitionContextProps>({
  timeline: null,
  setTimeline: null,
});

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
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

const useTimeline = () => {
  const { timeline } = useContext(TransitionContext);

  if (timeline === undefined || timeline === null) {
    throw new Error("You should use context within Provider(Gransition)");
  }
  return timeline;
};

export { TransitionContext, TransitionProvider, useTimeline };
