import { GrGrow } from "react-icons/gr";
import { AddImageCard } from "../../../../components/cards/add-image-card";
import { WeekTypeSelect } from "../../../../components/selects/week-type-select";
// import { SurvivorsList } from "../../../../components/lists/survivors-list";
import { currentsStrains } from "../../../../constants/mockups";

export default function NewWeekPage({}) {

  return (
    <div>
      <section className="px-4 py-2 md:px-8">
        <div className="flex items-center py-2">
          <GrGrow className="text-app-green mr-1" size={22} />
          <h1 className="text-app-green font-semibold text-xl">New week</h1>
        </div>
        
        <AddImageCard placeholder={"Upload an image"} />

        <WeekTypeSelect />

        {/* <SurvivorsList currentsStrains={currentsStrains}/> */}
      </section>
    </div>
  );
}