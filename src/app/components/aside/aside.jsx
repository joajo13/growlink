import { RiHomeLine } from "react-icons/ri";

import { AsideItem } from "./aside-item";
export const Aside = () => {
  return (
    <aside>
      <div className="lg:flex flex-col items-start justify-start hidden w-[300px] xl:w-[400] bg-app-white h-screen-without-navbar max-h-screen-without-navbar">
        <ul className="flex flex-col items-start w-full">
          <AsideItem text="Inicio" >
            <RiHomeLine size={24} className="fill-app-green"/>
          </AsideItem>
        </ul>
      </div>
    </aside>
  );
};
