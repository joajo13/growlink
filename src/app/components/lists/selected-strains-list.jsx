import React from 'react';
import { SelectedStrainCard } from '../cards/selected-strain-card';
import { NothingSelectedCard } from '../cards/no-strains-selected';

export const SelectedStrainsList = ({ selectedStrains, handleRemoveStrain }) => (
    <div className="relative overflow-hidden flex flex-col gap-y-2 py-1">
      {selectedStrains.slice(0, 3).map((strain) => (
        <React.Fragment key={strain.id}>
          <SelectedStrainCard
            name={strain.name}
            avatarSrc={strain.imgPath}
            seedBank={strain.seedBank}
            onDeleteClick={() => handleRemoveStrain(strain.id)}
          />
          <hr className="p-0 m-0" />
        </React.Fragment>
      ))}
      {selectedStrains.length > 3 && (
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-app-white to-transparent pointer-events-none z-40"></div>
      )}
      {selectedStrains.length === 0 && (
        <NothingSelectedCard optionLabel={'strain'}/>
      )}
    </div>
  );