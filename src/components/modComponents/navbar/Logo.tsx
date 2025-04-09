/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import LogoSvg from "@/assets/logo.svg?react";

import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <LogoSvg className="h-9 w-36" />
    </Link>
  );
};

export default Logo;

