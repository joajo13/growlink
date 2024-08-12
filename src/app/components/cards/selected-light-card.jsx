import { Avatar } from "@nextui-org/avatar"
import { DeleteButton } from "../buttons/delete-button"

export const SelectedLightCard = ({name, power, type, avatarSrc, onDeleteClick}) => {
  return (
    <div className="w-full bg-app-white py-3 px-3 hover:bg-slate-400/30 rounded-lg">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex w-full justify-start items-center">
          <Avatar src={`/resources/productors-pfp/${avatarSrc}`} size="sm" />
          <div>
            <h2 className="text-black/70 dark:text-white/90 ml-4 font-semibold text-md">
              {name}
            </h2>
            <p className="text-blue-600/50 dark:text-white/70 ml-4 font-semibold text-sm">
              {type} - {power}W
            </p>
          </div>
        </div>

        <DeleteButton onClick={onDeleteClick} />
      </div>
    </div>
  )
}