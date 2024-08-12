import { RiHomeLine } from "react-icons/ri";
import { AsideItem } from "./aside-item";

const asideItems = [
  {
    text: "Inicio",
    href: "/home",
    icon: <RiHomeLine size={24} className="fill-app-green" />,
  },
];

export const Aside = () => {
  return (
    <aside>
      <div className="lg:flex flex-col items-start justify-start hidden w-[300px] xl:w-[400] bg-app-white h-screen-without-navbar max-h-screen-without-navbar">
        <ul className="flex flex-col items-start w-full">
          {
            asideItems.map((item, index) => (
              <AsideItem key={index} text={item.text} href={item.href}>
                {item.icon}
              </AsideItem>
            ))
          }
        </ul>
      </div>
    </aside>
  );
};
