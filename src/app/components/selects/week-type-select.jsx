import { WeeksTypeList } from "../lists/weeks-type-list.jsx";

export const WeekTypeSelect = ({weekTypeState, setWeekType}) => {
  return (
    <div className="py-4">
      <div className="py-1">
        <div className="flex items-center py-2">
          <h3 className="text-app-green font-semibold text-lg">
            Choose a week type
          </h3>
        </div>
      </div>
      <WeeksTypeList weekTypeState={weekTypeState} setWeekType={setWeekType} />
    </div>
  );
}
