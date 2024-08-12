import React from "react";
import { NothingSelectedCard as NothingSelectedCard } from "../cards/no-strains-selected";
import { SelectedLightCard } from "../cards/selected-light-card";

export const SelectedLightsList = ({ selectedLights, handleRemoveLight }) => {
  return (
    <div className="relative overflow-hidden flex flex-col gap-y-2 py-1">
      {selectedLights.slice(0, 3).map((light) => (
        <React.Fragment key={light.uniqueId}>
          <SelectedLightCard
            name={light.name}
            avatarSrc={light.imgPath}
            power={light.power}
            type={light.type}
            onDeleteClick={() => handleRemoveLight(light.uniqueId)}
          />
          <hr className="p-0 m-0" />
        </React.Fragment>
      ))}
      {selectedLights.length > 3 && (
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-app-white to-transparent pointer-events-none z-40"></div>
      )}
      {selectedLights.length === 0 && <NothingSelectedCard optionLabel={'light'}/>}
    </div>
  );
};
