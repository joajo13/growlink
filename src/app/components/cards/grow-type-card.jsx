import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
export const GrowTypeCard = ({ growType, selected, handleOnClick }) => {
  return (
    <button
      className={`hover:scale-105 w-1/3 md:w-fit transition-transform duration-300 ease-in-out hover:cursor-pointer border-app-dark-green hover:text-app-green group `}
      onClick={() => handleOnClick(growType.value)}
    >
      <Card
        isHoverable
        key={growType.value}
        isFooterBlurred
        className="w-full h-[200px] md:w-[200px] md:h-[300px] col-span-12 sm:col-span-5 bg-app-white"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h2
            className={`text-2xl uppercase font-bold ${
              selected === growType.value ? "text-white/90" : "text-black/70"
            }`}
          >
            {growType.label}
          </h2>
        </CardHeader>
        <CardFooter
          className={`absolute group group-hover:bg-white/10 bottom-0 z-10 justify-between ${
            selected === growType.value ? "bg-white/30" : "bg-black/30"
          }`}
        >
          <div>
            <p
              className={`${
                selected !== growType.value ? "text-white" : "text-green-500"
              } text-medium font-semibold group-hover:text-green-500`}
            >
              {growType.label}
            </p>
          </div>
        </CardFooter>
      </Card>
    </button>
  );
};
