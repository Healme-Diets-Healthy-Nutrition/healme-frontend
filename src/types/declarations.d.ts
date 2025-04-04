/// <reference types="vite-plugin-svgr" />

declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
    export default content;
  }