import { Link } from "@nextui-org/react";
export const AsideItem = ({ children, text, href }) => {
  return (
    <li className="flex items-center justify-start w-full p-4">
      <Link className="w-full h-full rounded-md hover:bg-slate-500/20 p-4 cursor-pointer transition-all duration-150" href={href}>
        {children}
        <span className="text-xl text-black ml-2">{text}</span>
      </Link>
    </li>
  );
};
