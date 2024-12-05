import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import HorizontalMenu from './HorizontalMenu';

const Navigation: React.FC = () => {
  return (
    <div className='h-37'>
      <div className='h-24 w-screen bg-linen'>
        <div className='flex items-center justify-between px-8 h-full'>
          <Logo></Logo>
          <Profile></Profile>
        </div>
          <HorizontalMenu></HorizontalMenu>
      </div>
    </div>
  );
};

export default Navigation; // Add this line to make it the default export
