export const Chip = ({ text, startIcon, handleClick, color, selected }) => {
  const colors = {
    green: `bg-green-200/25 font-semibold text-green-600 hover:bg-green-200/70 ${
      selected ? "border-2 border-green-600" : ""
    }`,
    red: `bg-red-200/25 font-semibold text-red-600 hover:bg-red-200/70 ${
      selected ? "border-2 border-red-600" : ""
    }`,
    blue: `bg-blue-200/25 font-semibold text-blue-600 hover:bg-blue-200/70 ${
      selected ? "border-2 border-blue-600" : ""
    }`,
    yellow: `bg-yellow-200/25 font-semibold text-yellow-600 hover:bg-yellow-200/70 ${
      selected ? "border-2 border-yellow-600" : ""
    }`,
    violet: `bg-violet-200/25 font-semibold text-violet-600 hover:bg-violet-200/70 ${
      selected ? "border-2 border-violet-600" : ""
    }`,
  };

  const colorClass = colors[color] || colors.green;

  return (
    <div>
      <button
        className={`${colorClass} rounded-full px-4 py-1 flex justify-center items-center transition duration-300 ease-in-out `}
        onClick={handleClick}
      >
        {startIcon}
        <span className="text-sm">{text}</span>
      </button>
    </div>
  );
};
