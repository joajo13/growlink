import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { FaPlus } from "react-icons/fa";

export const GrowingMediumAutocomplete = ({value, setValue, handleAddGrowingMedium, growingMedium}) => {
  return (
    <div className="flex justify-between items-center gap-2 mb-1">
      <Autocomplete
        aria-labelledby="growingMedium"
        defaultItems={growingMedium}
        allowsCustomValue
        inputProps={{
          size: "sm",
          classNames: {
            inputWrapper: ["bg-transparent", "border-2 border-app-green"],
          },
        }}
        placeholder="Select a growing medium"
        selectedKey={value}
        onSelectionChange={setValue}
      >
        {growingMedium.map((medium) => (
          <AutocompleteItem
            className="h-full"
            key={medium.id}
            value={medium.id}
            startContent={
              <Avatar src={`/resources/productors-pfp/${medium.imgPath}`} />
            }
            endContent={
              <Button isIconOnly variant="flat" size="sm">
                <FaPlus className="text-app-green" />
              </Button>
            }
            textValue={medium.name}
          >
            <h2 className="text-black/70 dark:text-white/90 ml-4 font-semibold text-md">
              {medium.name}
            </h2>
            <p className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
              {medium.seedBank}
            </p>
            <span className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
                {medium.type}
            </span>
            <span className="text-blue-600/50 dark:text-white/70 ml-4 font-semibold text-sm">
                {medium.power}W
            </span>
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <Button
        startContent={<FaPlus size={16} />}
        variant="solid"
        size="sm"
        className="grow bg-app-green text-app-white"
        onClick={() => handleAddGrowingMedium(value)}
      >
        Add
      </Button>
    </div>
  );
};