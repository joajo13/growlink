import { Input } from "@nextui-org/input";
import { GrGrow } from "react-icons/gr";
import { GrowTypesList } from "../../../components/lists/grow-types-list";
import { MultipleSelect } from "../../../components/selects/multiple-select";
import { FixedBottomButton } from "../../../components/buttons/continue-button";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { strains, lights, mediumTypes } from "../../../constants/mockups";
import { WateringTypesList } from "../../../components/lists/watering-type-list";
import { AddImageCard } from "../../../components/cards/add-image-card";

const NewGrow = () => {
  //Fetch the initial options here, on the server side

  return (
    <div>
      <section className="px-4 py-3 md:px-8">
        <AddImageCard placeholder={"Add a grow image"} />

        <div className="flex items-center py-6">
          <GrGrow className="text-app-green mr-1" size={22} />
          <h1 className="text-app-green font-semibold text-xl">New grow</h1>
        </div>

        <div className="py-1">
          <Input
            type="text"
            size="sm"
            startContent={<GrGrow className="text-app-green" />}
            placeholder="Grow name"
            classNames={{
              inputWrapper: ["bg-transparent", "border-2 border-app-green"],
            }}
          />
        </div>

        <GrowTypesList />

        <WateringTypesList />

        <MultipleSelect
          initialOptions={strains}
          title={"Strains"}
          type={"strain"}
          addText={"strain"}
        />

        <MultipleSelect
          initialOptions={lights}
          title={"Vegetation lights"}
          type={"light"}
          addText={"light"}
        />

        <MultipleSelect
          initialOptions={lights}
          title={"Flowering lights"}
          type={"light"}
          addText={"light"}
        />

        <MultipleSelect
          initialOptions={mediumTypes}
          title={"Growing medium"}
          type={"medium"}
          addText={"medium"}
        />

        <FixedBottomButton to={"/home/grows/weeks/new"} text={'Continue'} icon={<FaArrowRight/>}/>
      </section>
    </div>
  );
};

export default NewGrow;
