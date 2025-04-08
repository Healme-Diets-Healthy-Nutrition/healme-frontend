import React from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import HorizontalMenu from "./HorizontalMenu";
import Navbar from "@/components/modComponents/navbar/Navbar";

const Navigation: React.FC = () => {
  return (
    <div className="h-37 mb-14">
      <div className="h-24 w-screen bg-secondary-background">
        <div className="flex items-center justify-between px-8 h-full">
          <Logo></Logo>
          <Profile></Profile>
        </div>
        <HorizontalMenu></HorizontalMenu>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Navigation;
