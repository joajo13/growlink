import { PiPencilCircle } from "react-icons/pi";

export const WeekTypeCard = ({ weekType, borderColor, selected, onClick }) => {
  const colors = {
    green: `bg-green-200/25 font-semibold text-green-600 hover:bg-green-200/70  ${
      selected == weekType.id ? "border-2 border-green-600" : ""
    }`,
    red: `bg-red-200/25 font-semibold text-red-600 hover:bg-red-200/70 ${
      selected == weekType.id ? "border-2 border-red-600" : ""
    }`,
    blue: `bg-blue-200/25 font-semibold text-blue-600 hover:bg-blue-200/70 ${
      selected == weekType.id ? "border-2 border-blue-600" : ""
    }`,
    yellow: `bg-yellow-200/25 font-semibold text-yellow-600 hover:bg-yellow-200/70 ${
      selected == weekType.id ? "border-2 border-yellow-600" : ""
    }`,
    orange: `bg-orange-200/25 font-semibold text-orange-600 hover:bg-orange-200/70 ${
      selected == weekType.id ? "border-2 border-orange-600" : ""
    }`,
  };

  const colorClass = colors[borderColor] || colors.green;

  return (
    <div
      onClick={onClick}
      key={weekType.id}
      className={`${colorClass} p-2 hover:cursor-pointer rounded-xl transition duration-300 ease-in-out hover:scale-105 w-full lg:w-[250px]`}
      shadow="none"
    >
      <div className="flex items-center justify-center">
        <h3 className="font-semibold text-lg">
          {weekType.label}
        </h3>
      </div>
    </div>
  );
};
