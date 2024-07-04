import { ButtonProps } from "@/types/types";

export default function Button({ text, path }: ButtonProps) {
  return (
    <a
      href={path}
      className="bg-accent py-[25px] px-[38px] rounded-[10px] text-[20px] font-bold uppercase"
    >
      {text}
    </a>
  );
}
