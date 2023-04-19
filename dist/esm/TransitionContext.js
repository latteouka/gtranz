import React, { useState, createContext, } from "react";
import gsap from "gsap";
var TransitionContext = createContext({
    timeline: null,
    setTimeline: null,
});
var TransitionProvider = function (_a) {
    var children = _a.children;
    var _b = useState(function () {
        return gsap.timeline({ paused: true });
    }), timeline = _b[0], setTimeline = _b[1];
    return (React.createElement(TransitionContext.Provider, { value: {
            timeline: timeline,
            setTimeline: setTimeline,
        } }, children));
};
export { TransitionContext, TransitionProvider };
//# sourceMappingURL=TransitionContext.js.map