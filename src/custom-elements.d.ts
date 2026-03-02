import React from 'react';

// For modern React 18+
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'zero-md': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
      };
    }
  }
}

// Keep this as a fallback for older React versions / global setups
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zero-md': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
      };
    }
  }
}
