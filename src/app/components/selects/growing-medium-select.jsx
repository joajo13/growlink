"use client";
import { PiTentBold } from "react-icons/pi";
import { GrowingMediumAutocomplete } from "../autocompletes/growing-medium-autocomplete";
import { useState } from "react";
import { growingMediums } from "../../constants/mockups";
import { SelectedGrowingMediumList } from "../lists/selected-growing-mediums-list";

export const GrowingMediumSelect = ({ title }) => {
  const [selectedGrowingMedium, setSelectedGrowingMedium] = useState([]);
  const [growingMediumCounter, setGrowingMediumCounter] = useState(1);
  const [value, setValue] = useState(1);

  const handleAddGrowingMedium = (growingMediumId) => {
    const medium = growingMediums.find(
      (medium) => medium.id == growingMediumId
    );

    if (selectedGrowingMedium.includes(medium)) {
      return;
    }

    setSelectedGrowingMedium([...selectedGrowingMedium, medium]);
    setGrowingMediumCounter(growingMediumCounter + 1);
  };
  const handleRemoveGrowingMedium = (growingMediumId) => {
    setSelectedGrowingMedium(
      selectedGrowingMedium.filter((medium) => medium.id !== growingMediumId)
    );
  };

  return (
    <>
      <div className="flex items-center py-4 mt-4">
        <PiTentBold className="text-app-green mr-1" size={24} />
        <h2 className="text-app-green font-semibold text-xl">{title}</h2>
      </div>

      <GrowingMediumAutocomplete
        setValue={setValue}
        value={value}
        handleAddGrowingMedium={handleAddGrowingMedium}
        growingMedium={growingMediums}
      />

      <SelectedGrowingMediumList
        handleRemoveGrowingMedium={handleRemoveGrowingMedium}
        selectedGrowingMedium={selectedGrowingMedium}
      />
    </>
  );
};
