import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const FixedBottomButton = ({to, text, icon}) => {
  return (
    <div className="flex w-full justify-end items-center fixed bottom-0 right-0 p-4 z-40">
      <Button
        variant="solid"
        size="lg"
        as={to ? Link : 'button'}
        href={to}
        className="bg-app-green text-app-white w-fit-content group relative overflow-hidden hover:scale-105 transition-transform duration-300 rounded-lg flex justify-start items-center"
      >
          {icon}
          {text}
      </Button>
    </div>
  );
};
