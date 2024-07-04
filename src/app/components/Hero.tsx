import Image from "next/image";
import logo from "../../../public/logo.svg";
import heroImage from "../../../public/ym-hero.webp";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-col items-center">
        <Image src={logo} alt="Your Misery Logo" className="min-w-[517px]" />
        <div className="mt-[61px] gap-[40px] flex">
          <Button text="Merch" path="#" />
          <Button text="Tickets" path="#" />
        </div>
      </div>
      <div>
        <Image
          src={heroImage}
          alt="A promo picture of Your Misery"
          className="min-w-[619px]"
        />
      </div>
    </section>
  );
}
