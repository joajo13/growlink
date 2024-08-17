import React from "react";
import { NothingSelectedCard as NothingSelectedCard } from "../cards/no-strains-selected";
import { SelectedGrowingMediumCard } from "../cards/selected-growing-medium-card";

export const SelectedGrowingMediumList = ({ selectedGrowingMedium, handleRemoveGrowingMedium }) => {
  return (
    <div className="relative overflow-hidden flex flex-col gap-y-2 py-1">
      {selectedGrowingMedium.slice(0, 3).map((medium) => (
        <React.Fragment key={medium.id}>
          <SelectedGrowingMediumCard
            name={medium.name}
            avatarSrc={medium.imgPath}
            power={medium.power}
            type={medium.type}
            onDeleteClick={() => handleRemoveGrowingMedium(medium.id)}
          />
          <hr className="p-0 m-0" />
        </React.Fragment>
      ))}
      {selectedGrowingMedium.length > 3 && (
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-app-white to-transparent pointer-events-none z-40"></div>
      )}
      {selectedGrowingMedium.length === 0 && <NothingSelectedCard optionLabel={'growing medium'}/>}
    </div>
  );
};