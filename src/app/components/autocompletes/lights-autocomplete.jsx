import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { FaPlus } from "react-icons/fa";

export const LightsAutocomplete = ({value, setValue, handleAddLight, lights}) => {
  return (
    <div className="flex justify-between items-center gap-2 mb-1">
      <Autocomplete
        aria-labelledby="lights"
        defaultItems={lights}
        allowsCustomValue
        inputProps={{
          size: "sm",
          classNames: {
            inputWrapper: ["bg-transparent", "border-2 border-app-green"],
          },
        }}
        placeholder="Select a light"
        selectedKey={value}
        onSelectionChange={setValue}
      >
        {lights.map((light) => (
          <AutocompleteItem
            className="h-full"
            key={light.id}
            value={light.id}
            startContent={
              <Avatar src={`/resources/productors-pfp/${light.imgPath}`} />
            }
            endContent={
              <Button isIconOnly variant="flat" size="sm">
                <FaPlus className="text-app-green" />
              </Button>
            }
            textValue={light.name}
          >
            <h2 className="text-black/70 dark:text-white/90 ml-4 font-semibold text-md">
              {light.name}
            </h2>
            <p className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
              {light.seedBank}
            </p>
            <span className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
                {light.type}
            </span>
            <span className="text-blue-600/50 dark:text-white/70 ml-4 font-semibold text-sm">
                {light.power}W
            </span>
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <Button
        endContent={<FaPlus size={16} />}
        variant="solid"
        size="sm"
        className="grow bg-app-green text-app-white"
        onClick={() => handleAddLight(value)}
      >
        Add
      </Button>
    </div>
  );
};