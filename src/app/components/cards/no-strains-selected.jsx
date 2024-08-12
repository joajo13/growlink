import { FaCircleExclamation } from "react-icons/fa6";

export const NothingSelectedCard = ({optionLabel}) => (
  <div className="p-3 rounded-lg w-full hover:bg-slate-500/30 hover:cursor-pointer flex items-center justify-start gap-2">
    <FaCircleExclamation className="text-red-500/70 dark:text-white/90" />
    <p className="text-red-500/70 dark:text-white/90 text-sm">
      No {optionLabel} selected
    </p>
  </div>
);
