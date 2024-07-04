import { CardProps } from "@/types/types";

export default function Card({ title, cardFooterText, path }: CardProps) {
  return (
    <div className="w-[350px] h-[500px] bg-accent rounded-[10px] p-[20px] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-[20px] items-center">
        <h2 className="text-[28px] font-bold uppercase">{title}</h2>
        <a href={path} className="underline">
          {cardFooterText}
        </a>
      </div>
    </div>
  );
}
