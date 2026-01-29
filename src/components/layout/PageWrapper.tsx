"use client";

import { ReactNode } from "react";
import ErrorBoundary from "../error/ErrorBoundary";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "" }) => {
  return (
    <ErrorBoundary>
      <div className={className}>
        {children}
      </div>
    </ErrorBoundary>
  );
};

export default PageWrapper;