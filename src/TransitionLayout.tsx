import React, { useState, useRef } from 'react';
import { useTimeline } from './Gtranz';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const timeline = useTimeline();
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          timeline.pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  return <div ref={el}>{displayChildren}</div>;
}
