import React, { Dispatch, SetStateAction } from "react";
interface TransitionContextProps {
    timeline: gsap.core.Timeline | null;
    setTimeline: Dispatch<SetStateAction<gsap.core.Timeline>> | null;
}
declare const TransitionContext: React.Context<TransitionContextProps>;
declare const TransitionProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export { TransitionContext, TransitionProvider };
