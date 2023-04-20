"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsomorphicLayoutEffect = exports.useTimeline = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var TransitionContext_1 = require("./TransitionContext");
var TransitionLayout_1 = tslib_1.__importDefault(require("./TransitionLayout"));
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(require("./useIsomorphicLayoutEffect"));
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect_1.default;
// Provider
var Gtranz = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(TransitionContext_1.TransitionProvider, null,
        react_1.default.createElement(TransitionLayout_1.default, null, children)));
};
// timeline
var useTimeline = function () {
    var timeline = (0, react_1.useContext)(TransitionContext_1.TransitionContext).timeline;
    if (timeline === undefined || timeline === null) {
        throw new Error("You should use context within Provider(Gransition)");
    }
    return timeline;
};
exports.useTimeline = useTimeline;
exports.default = Gtranz;
//# sourceMappingURL=Gtranz.js.map