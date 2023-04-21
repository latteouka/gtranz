import { useEffect, useLayoutEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
