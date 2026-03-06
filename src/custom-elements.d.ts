import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'zero-md': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
      };
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zero-md': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
      };
    }
  }
}
