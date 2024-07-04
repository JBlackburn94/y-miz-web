import Image from "next/image";
import NavMenu from "./NavMenu";
import logo from "../../../../public/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="my-[35px] mx-[100px] flex justify-between items-center">
      <Image src={logo} alt="Your Misery logo" className="h-[80px] w-auto" />
      <NavMenu />
      <div className="flex gap-[40px]">
        <a href="#" className="text-[40px]">
          <FaInstagram />
        </a>
        <a href="#" className="text-[40px]">
          <FaXTwitter />
        </a>
      </div>
    </header>
  );
}
