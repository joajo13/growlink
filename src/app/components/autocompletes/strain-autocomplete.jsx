import { useState } from "react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { FaPlus } from "react-icons/fa";
import { strains } from "../../constants/mockups";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

export const StrainAutocomplete = ({value, setValue, handleAddStrain}) => {
  return (
    <div className="flex justify-between items-center gap-2 mb-1">
      <Autocomplete
        aria-labelledby="strains"
        defaultItems={strains}
        allowsCustomValue
        inputProps={{
          size: "sm",
          classNames: {
            inputWrapper: ["bg-transparent", "border-2 border-app-green"],
          },
        }}
        placeholder="Select a strain"
        selectedKey={value}
        onSelectionChange={setValue}
      >
        {strains.map((strain) => (
          <AutocompleteItem
            className="h-full"
            key={strain.id}
            value={strain.id}
            startContent={
              <Avatar src={`/resources/productors-pfp/${strain.imgPath}`} />
            }
            endContent={
              <Button isIconOnly variant="flat" size="sm">
                <FaPlus className="text-app-green" />
              </Button>
            }
            textValue={strain.name}
          >
            <h2 className="text-black/70 dark:text-white/90 ml-4 font-semibold text-md">
              {strain.name}
            </h2>
            <p className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
              {strain.seedBank}
            </p>
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <Button
        endContent={<FaPlus size={16} />}
        variant="solid"
        size="sm"
        className="grow bg-app-green text-app-white"
        onClick={() => handleAddStrain(value)}
      >
        Add
      </Button>
    </div>
  );
};
