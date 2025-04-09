import LogoSvgGreen from "@/assets/logoGreen.svg?react";
import { Link } from "react-router";

function LogoGreen() {
  return (
    <Link to="/"><LogoSvgGreen className="w-36 h-10"/></Link>
  )
}

export default LogoGreen;