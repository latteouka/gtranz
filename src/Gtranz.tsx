import React, { useContext } from 'react';
import { TransitionProvider, TransitionContext } from './TransitionContext';
import TransitionLayout from './TransitionLayout';

// Provider
export const Gtranz = ({ children }: { children: React.ReactNode }) => (
  <TransitionProvider>
    <TransitionLayout>{children}</TransitionLayout>
  </TransitionProvider>
);

export const useTimeline = () => {
  const { timeline } = useContext(TransitionContext);

  if (timeline === undefined || timeline === null) {
    throw new Error('You should use context within Provider(Gtranz)');
  }
  return timeline;
};
