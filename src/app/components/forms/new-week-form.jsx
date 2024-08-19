"use client";
import { GrGrow } from "react-icons/gr";
import { AddImageCard } from "../../components/cards/add-image-card";
import { WeekTypeSelect } from "../../components/selects/week-type-select";
import { SurvivorsList } from "../../components/lists/survivors-list";
import { MultipleSelect } from "../../components/selects/multiple-select";
import { MeasurementInput } from "../../components/inputs/measurement-input";
import { Textarea } from "@nextui-org/react";
import { FaCommentAlt, FaPlus } from "react-icons/fa";
import { FixedBottomButton } from "../../components/buttons/continue-button";
import { useState } from "react";
import { nutrients } from "../../constants/mockups";

export const NewWeekForm = ({ currentsStrains, germinationMethods }) => {
  const [weekType, setWeekType] = useState(1);

  return (
    <>
      <div className="flex items-center py-2">
        <GrGrow className="text-app-green mr-1" size={22} />
        <h1 className="text-app-green font-semibold text-xl">New week</h1>
      </div>

      <AddImageCard placeholder={"Upload an image"} />

      <WeekTypeSelect weekTypeState={weekType} setWeekType={setWeekType} />

      {weekType === 0 ? (
        <>
          <SurvivorsList currentsStrains={currentsStrains} />

          <MultipleSelect
            type={"germinationMethod"}
            title={"Germination method"}
            initialOptions={germinationMethods}
            addText={"germination method"}
          />
        </>
      ) : null}

      <MeasurementInput
        iconPath="height.svg"
        title="Height"
        tabs={[
          { label: "cm", value: "cm" },
          { label: "in", value: "in" },
        ]}
      />

      <MeasurementInput
        iconPath="distance.svg"
        title="Distance light/plant"
        tabs={[
          { label: "cm", value: "cm" },
          { label: "in", value: "in" },
        ]}
      />

      <MultipleSelect
        type={"nutrient"}
        title={"Nutrients"}
        initialOptions={nutrients}
        addText={"nutrient"}
      />

      <div className="py-4">
        <div className="py-1">
          <h2 className="text-app-green font-semibold text-lg">Comments</h2>
        </div>

        <Textarea
          type="text"
          size="sm"
          startContent={<FaCommentAlt className="text-app-green" />}
          placeholder="Comments"
          classNames={{
            inputWrapper: ["bg-transparent", "border-2 border-app-green"],
          }}
        />
      </div>

      <FixedBottomButton text={"Add week"} icon={<FaPlus />} />
    </>
  );
};
