import React, { useContext } from "react";
import { TransitionContext, TransitionProvider } from "./TransitionContext";
import TransitionLayout from "./TransitionLayout";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
// Provider
var Gtranz = function (_a) {
    var children = _a.children;
    return (React.createElement(TransitionProvider, null,
        React.createElement(TransitionLayout, null, children)));
};
// timeline
var useTimeline = function () {
    var timeline = useContext(TransitionContext).timeline;
    if (timeline === undefined || timeline === null) {
        throw new Error("You should use context within Provider(Gransition)");
    }
    return timeline;
};
export { useTimeline, useIsomorphicLayoutEffect };
export default Gtranz;
//# sourceMappingURL=Gtranz.js.map