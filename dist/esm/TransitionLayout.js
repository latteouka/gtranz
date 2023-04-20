import React, { useState, useRef } from "react";
import { useTimeline } from "./Gtranz";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
export default function TransitionLayout(_a) {
    var children = _a.children;
    var _b = useState(children), displayChildren = _b[0], setDisplayChildren = _b[1];
    var timeline = useTimeline();
    var el = useRef(null);
    useIsomorphicLayoutEffect(function () {
        if (children !== displayChildren) {
            if (timeline.duration() === 0) {
                setDisplayChildren(children);
            }
            else {
                timeline.play().then(function () {
                    timeline.pause().clear();
                    setDisplayChildren(children);
                });
            }
        }
    }, [children]);
    return React.createElement("div", { ref: el }, displayChildren);
}
//# sourceMappingURL=TransitionLayout.js.map