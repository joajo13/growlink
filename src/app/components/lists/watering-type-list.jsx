"use client";
import { useState } from "react";
import { Chip } from "../chips/chip";
import { PiTentBold } from "react-icons/pi";

export const WateringTypesList = () => {
  const wateringTypes = [
    {
      value: "manual",
      label: "Manual",
      color: "green",
    },
    {
      value: "drip",
      label: "Drip",
      color: "yellow",
    },
    {
        value: "hydroponic",
        label: "Hydroponic",
        color: "blue",
    },
    {
        value: "aeroponic",
        label: "Aeroponic",
        color: "violet",
    },
  ];

  const [wateringTypeState, setWateringType] = useState("manual");

  const handleChipClick = (value) => {
    setWateringType(value);
  };

  return (
    <>
      <div className="flex items-center py-1 mt-4">
        <PiTentBold className="text-app-green mr-1" size={20} />
        <h2 className="text-app-green font-semibold text-lg">Watering type</h2>
      </div>
      <div className="py-1 gap-3 flex justify-start items-center">
        {wateringTypes.map((wateringType) => (
          <Chip
            color={wateringType.color}
            handleClick={() => handleChipClick(wateringType.value)}
            selected={wateringTypeState === wateringType.value}
            text={wateringType.label}
            key={wateringType.value}
          />
        ))}
      </div>
    </>
  );
};
