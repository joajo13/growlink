"use client";
import { PiTentBold } from "react-icons/pi";
import { LightsAutocomplete } from "../autocompletes/lights-autocomplete";
import { useState } from "react";
import { lights } from "../../constants/mockups";
import { SelectedLightsList } from "../lists/selected-lights-list";

export const LightSelect = ({title}) => {
  const [selectedLights, setSelectedLights] = useState([]);
  const [lightCounter, setLightCounter] = useState(1)
  const [value, setValue] = useState(1);

  const handleAddLight = (lightId) => {
    const light = lights.find((light) => light.id == lightId);

    const newLight = {
      ...light,
      uniqueId: `${light.id}-${lightCounter}`,
    }

    setSelectedLights([...selectedLights, newLight]);
    setLightCounter(lightCounter + 1);
  };

  const handleRemoveLight = (lightUniqueId) => {
    setSelectedLights(selectedLights.filter((light) => light.uniqueId !== lightUniqueId));
  };

  return (
    <>
      <div className="flex items-center py-2 mt-4">
        <PiTentBold className="text-app-green mr-1" size={24} />
        <h2 className="text-app-green font-semibold text-xl">
          {title}
        </h2>
      </div>

      <LightsAutocomplete
        setValue={setValue}
        value={value}
        handleAddLight={handleAddLight}
        lights={lights}
      />

      <SelectedLightsList
        handleRemoveLight={handleRemoveLight}
        selectedLights={selectedLights}
      />
    </>
  );
};
