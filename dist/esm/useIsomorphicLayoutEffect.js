import { useEffect, useLayoutEffect } from "react";
var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map