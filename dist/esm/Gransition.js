import React, { useContext } from "react";
import { TransitionContext, TransitionProvider } from "./TransitionContext";
import TransitionLayout from "./TransitionLayout";
export var Gransition = function (_a) {
    var children = _a.children;
    return (React.createElement(TransitionProvider, null,
        React.createElement(TransitionLayout, null, children)));
};
export var useTimeline = function () {
    var timeline = useContext(TransitionContext).timeline;
    if (timeline === undefined || timeline === null) {
        throw new Error("You should use context within Provider(Gransition)");
    }
    return timeline;
};
//# sourceMappingURL=Gransition.js.map