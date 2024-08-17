"use client";
import { useState } from "react";
import { Chip } from "../chips/chip";
import { weekTypes } from "../../constants/mockups";

export const WeeksTypeList = () => {

  const [growTypeState, setGrowType] = useState(1);

  const handleChipClick = (value) => {
    setGrowType(value);
  };

  return (
    <>
      <div className="py-1 gap-3 flex justify-start items-center overflow-y-auto">
        {weekTypes.map((growType) => (
          <Chip
            color={growType.color}
            handleClick={() => handleChipClick(growType.id)}
            selected={growTypeState === growType.id}
            text={growType.label}
            key={growType.id}
          />
        ))}
      </div>
    </>
  );
};
