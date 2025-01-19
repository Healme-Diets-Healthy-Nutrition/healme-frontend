/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import LogoSvg  from '../../assets/logo.svg?react';
import { Link } from 'react-router';

const Logo: React.FC = () => {
    return (
      <Link to='/mainpage'>
        <LogoSvg className='h-48 w-36 cursor-pointer'></LogoSvg>
      </Link>
  );
  };
export default Logo;

