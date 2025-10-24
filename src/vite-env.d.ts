/// <reference types="vite/client" />
declare module '*.css';
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/autoplay';
declare module 'react-router-hash-link' {
  import * as React from 'react';
  import { LinkProps } from 'react-router-dom';

  export interface HashLinkProps extends LinkProps {
    smooth?: boolean;
    scroll?: (el: Element) => void;
  }

  export const HashLink: React.FC<HashLinkProps>;
  export default HashLink;
}