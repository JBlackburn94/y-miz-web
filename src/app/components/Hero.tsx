"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import heroImage from "../../../public/ym-hero.webp";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export default function Hero() {
  useGSAP(() => {
    gsap.from("#heroChild", {
      duration: 0.5,
      opacity: 0,
      delay: 1,
      yPercent: 10,
      stagger: 0.2,
    });
  });

  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center" id="heroChild">
        <Image src={logo} alt="Your Misery Logo" className="min-w-[517px]" />
        <div className="mt-[61px] gap-[40px] flex" id="heroChild">
          <Button text="Merch" path="#" />
          <Button text="Tickets" path="#" />
        </div>
      </div>
      <div id="heroChild">
        <Image
          src={heroImage}
          alt="A promo picture of Your Misery"
          className="min-w-[619px]"
        />
      </div>
    </section>
  );
}
