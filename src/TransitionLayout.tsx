import React, { useState } from "react";
import { useTimeline } from "./TransitionContext";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const timeline = useTimeline();

  useIsomorphicLayoutEffect(() => {
    // check if page has changed
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // reset outro timeline after played
          timeline.pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  return <div>{displayChildren}</div>;
}
