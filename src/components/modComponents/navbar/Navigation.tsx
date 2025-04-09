import React from "react";
import Profile from "./Profile";
import Navbar from "@/components/modComponents/navbar/Navbar";
import LogoGreen from "./LogoGreen";

const Navigation: React.FC = () => {
  return (
    <nav className="h-24 w-screen bg-secondary-background flex items-center justify-between p-10 pl-5">
      <LogoGreen></LogoGreen>
      <Navbar></Navbar>
      <Profile></Profile>
    </nav>
  );
};

export default Navigation;
