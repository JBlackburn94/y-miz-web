"use client";

import Image from "next/image";
import NavMenu from "./NavMenu";
import logo from "../../../../public/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const nav = useRef<HTMLHeadElement>(null);

  useGSAP(() => {
    gsap.to(nav.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 0.2,
    });
  });

  return (
    <header
      className="opacity-0 scale-110 my-[35px] mx-[100px] flex justify-between items-center"
      ref={nav}
    >
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
