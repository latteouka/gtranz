import React from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
declare const Gtranz: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
declare const useTimeline: () => gsap.core.Timeline;
export { useTimeline, useIsomorphicLayoutEffect };
export default Gtranz;
