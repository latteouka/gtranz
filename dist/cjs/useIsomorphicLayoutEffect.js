"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? react_1.useLayoutEffect : react_1.useEffect;
exports.default = useIsomorphicLayoutEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map