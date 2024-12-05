/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import LogoSvg  from '../../assets/logo.svg?react';

const Logo: React.FC = () => {
    return (
      <LogoSvg className='h-48 w-152 cursor-pointer'></LogoSvg>
  );
  };
export default Logo;

