
// Fix: Import React to resolve missing 'React' namespace errors for React.ReactNode.
import React from 'react';

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface UseCase {
  title: string;
  icon: React.ReactNode;
}
