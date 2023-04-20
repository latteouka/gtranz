"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionProvider = exports.TransitionContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var gsap_1 = tslib_1.__importDefault(require("gsap"));
var TransitionContext = (0, react_1.createContext)({
    timeline: null,
    setTimeline: null,
});
exports.TransitionContext = TransitionContext;
var TransitionProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(function () {
        return gsap_1.default.timeline({ paused: true });
    }), timeline = _b[0], setTimeline = _b[1];
    return (react_1.default.createElement(TransitionContext.Provider, { value: {
            timeline: timeline,
            setTimeline: setTimeline,
        } }, children));
};
exports.TransitionProvider = TransitionProvider;
//# sourceMappingURL=TransitionContext.js.map