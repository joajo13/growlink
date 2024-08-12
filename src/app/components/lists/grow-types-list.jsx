"use client";
import { useState } from "react";
import { Chip } from "../chips/chip";
import { PiTentBold } from "react-icons/pi";

export const GrowTypesList = () => {
  const growTypes = [
    {
      value: "indoor",
      label: "Indoor",
      color: "green",
    },
    {
      value: "outdoor",
      label: "Outdoor",
      color: "blue",
    },
    {
      value: "greenhouse",
      label: "Greenhouse",
      color: "yellow",
    },
  ];

  const [growTypeState, setGrowType] = useState("indoor");

  const handleChipClick = (value) => {
    setGrowType(value);
  };

  return (
    <>
      <div className="flex items-center py-1 mt-4">
        <PiTentBold className="text-app-green mr-1" size={20} />
        <h2 className="text-app-green font-semibold text-lg">Grow type</h2>
      </div>
      <div className="py-1 gap-3 flex justify-start items-center">
        {growTypes.map((growType) => (
          <Chip
            color={growType.color}
            handleClick={() => handleChipClick(growType.value)}
            selected={growTypeState === growType.value}
            text={growType.label}
            key={growType.value}
          />
        ))}
      </div>
    </>
  );
};
