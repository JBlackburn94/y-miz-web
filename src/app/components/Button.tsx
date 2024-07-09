import { ButtonProps } from "@/types/types";

export default function Button({ text, path }: ButtonProps) {
  return (
    <a
      href={path}
      className="bg-accent py-[25px] px-[38px] rounded-[10px] hover:rounded-b-none border-2 border-accent hover:border-b-white transition duration-150 text-[20px] font-bold uppercase"
    >
      {text}
    </a>
  );
}
