import { GrGrow } from "react-icons/gr";
import { NewWeekForm } from "../../../../components/forms/new-week-form";
import { currentsStrains, germinationMethods } from "../../../../constants/mockups";

export default function NewWeekPage({}) {
  return (
    <div>
      <section className="px-4 py-2 md:px-8">
        <NewWeekForm currentsStrains={currentsStrains} germinationMethods={germinationMethods}/>
      </section>
    </div>
  );
}
