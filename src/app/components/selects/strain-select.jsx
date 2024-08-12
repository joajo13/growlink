"use client";
import { strains } from "../../constants/mockups";
import { useState } from "react";
import { PiTentBold } from "react-icons/pi";
import { StrainAutocomplete } from "../autocompletes/strain-autocomplete";
import { SelectedStrainsList } from "../lists/selected-strains-list";
import { SeeAllButton } from "../buttons/see-all-strains-button";

export const StrainSelect = () => {
  const [selectedStrains, setSelectedStrains] = useState([]);
  const [value, setValue] = useState(1);

  const handleAddStrain = (strainId) => {
    const strain = strains.find((strain) => strain.id == strainId);

    if (selectedStrains.includes(strain)) {
      return;
    } else {
      setSelectedStrains([...selectedStrains, strain]);
    }
  };

  const handleRemoveStrain = (strainId) => {
    setSelectedStrains(
      selectedStrains.filter((strain) => strain.id !== strainId)
    );
  };

  return (
    <>
      <div className="flex items-center py-2 mt-4">
        <PiTentBold className="text-app-green mr-1" size={24} />
        <h2 className="text-app-green font-semibold text-xl">Strains</h2>
      </div>

      <StrainAutocomplete
        value={value}
        setValue={setValue}
        handleAddStrain={handleAddStrain}
      />

      <SelectedStrainsList
        handleRemoveStrain={handleRemoveStrain}
        selectedStrains={selectedStrains}
      />

      {selectedStrains.length > 2 && <SeeAllButton />}
    </>
  );
};
