import { links } from "@/constants/constants";

export default function NavMenu() {
  return (
    <nav className="bg-accent text-gray-400 w-[419px] flex items-center justify-center rounded-[10px] px-[23px] py-[13px] font-light uppercase text-[16px]">
      <ul className="flex gap-[35px]">
        {links.map(({ id, name, path }) => (
          <li key={id}>
            <a href={path} className="hover:text-white duration-500">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
