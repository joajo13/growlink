import { Chip } from "../chips/chip";
import { weekTypes } from "../../constants/mockups";

export const WeeksTypeList = ({weekTypeState, setWeekType}) => {

  const handleChipClick = (value) => {
    setWeekType(value);
  };

  return (
    <>
      <div className="py-1 gap-3 flex justify-start items-center overflow-y-auto">
        {weekTypes.map((weekType) => (
          <Chip
            color={weekType.color}
            handleClick={() => handleChipClick(weekType.id)}
            selected={weekTypeState === weekType.id}
            text={weekType.label}
            key={weekType.id}
          />
        ))}
      </div>
    </>
  );
};
