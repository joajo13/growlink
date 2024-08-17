import { Input } from "@nextui-org/input";
import { Avatar } from "@nextui-org/avatar";
import { DeleteButton } from "../buttons/delete-button";

export const SelectedGrowingMediumCard = ({ name, avatarSrc, seedBank, onDeleteClick }) => {
  return (
    <div className="w-full bg-app-white py-3 px-3 hover:bg-slate-400/30 rounded-lg">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex w-full justify-start items-center">
          <Avatar src={`/resources/productors-pfp/${avatarSrc}`} size="sm" />
          <div>
            <h2 className="text-black/70 dark:text-white/90 ml-4 font-semibold text-md">
              {name}
            </h2>
            <p className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
              {seedBank}
            </p>
          </div>
        </div>

        <Input
          type="number"
          size="sm"
          className="max-w-16 mr-2"
          min={1}
          defaultValue="1"
          classNames={{
            inputWrapper: ["bg-transparent", "border-2 border-app-green"],
          }}
        />

        <DeleteButton onClick={onDeleteClick}/>
      </div>
    </div>
  );
};