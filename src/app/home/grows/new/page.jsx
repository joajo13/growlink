import { Input } from "@nextui-org/input";
import { GrGrow } from "react-icons/gr";
import { GrowTypesList } from "../../../components/lists/grow-types-list";
import { WateringTypesList } from "../../../components/lists/watering-type-list";
import { StrainSelect } from "../../../components/selects/strain-select";
import { LightSelect } from "../../../components/selects/light-select";

const NewGrow = () => {
  return (
    <div>
      <section className="px-4 py-2 md:px-8">
        <div className="flex items-center py-2">
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

        <StrainSelect />

        <WateringTypesList />

        <LightSelect title={'Vegetation lights'}/>

        <LightSelect title={'Flowering lights'}/>

        {/* <MediumSelect /> */}
      </section>
    </div>
  );
};

export default NewGrow;
