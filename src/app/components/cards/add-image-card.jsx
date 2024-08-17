import { FaPlus } from "react-icons/fa";

export const AddImageCard = ({ placeholder }) => {
  return (
    <div className="w-full py-2">
      <div className="h-44 w-full rounded-xl bg-green-200/30 flex justify-center items-center hover:bg-green-400/30 transition-all duration-300 cursor-pointer">
        <div className="flex gap-2 items-center justify-start">
          <FaPlus className="text-app-green" size={22} />
          <h2 className="text-2xl text-app-green font-semibold">
            {placeholder}
          </h2>
        </div>
      </div>
    </div>
  );
};
