"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Gtranz_1 = require("./Gtranz");
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(require("./useIsomorphicLayoutEffect"));
function TransitionLayout(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(children), displayChildren = _b[0], setDisplayChildren = _b[1];
    var timeline = (0, Gtranz_1.useTimeline)();
    var el = (0, react_1.useRef)(null);
    (0, useIsomorphicLayoutEffect_1.default)(function () {
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
    return react_1.default.createElement("div", { ref: el }, displayChildren);
}
exports.default = TransitionLayout;
//# sourceMappingURL=TransitionLayout.js.map