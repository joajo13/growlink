"use client";
import { Input } from "@nextui-org/input";
import { Image } from "@nextui-org/image";
import { Tab, Tabs } from "@nextui-org/react";
import { imgPaths } from "../../constants/mockups";
import { useState } from "react";
import { get } from "http";

export const MeasurementInput = (
  {
    iconPath = "",
    title = "Measurement",
    tabs = [{ label: "cm", value: "cm" }],
  },
  meassureType = "distance"
) => {
  const imgPath = imgPaths.find((path) => path.type === "input")?.imgPath || "";

    const getInitialValue = (meassureType) => {
        switch (meassureType) {
            case "distance":
                return 0;
            case "height":
                return 0;
        }
    }


    const [inputValue, setInputValue] = useState(getInitialValue(meassureType));

  return (
    <div className="w-full py-4">
      <div className="w-full bg-slate-500/10 rounded-xl flex justify-between items-center flex-col p-3 gap-2">
        <div className="w-full flex items-center pt-2">
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src={`${imgPath}${iconPath}`}
              width={"100px"}
              height={"100px"}
              className="object-cover"
              alt={title.toLowerCase()}
              isBlurred
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-app-green font-semibold text-lg">{title}</h3>
            <Input
              type="number"
              size="sm"
              classNames={{
                inputWrapper: ["bg-transparent", "border-2 border-app-green"],
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Tabs
            fullWidth
            classNames={{
              tabList: [
                "bg-green-500/10",
                "rounded-xl",
                "w-full",
                "flex",
                "justify-between",
                "items-center",
                "gap-2",
                "p-2",
              ],
              tab: [
                "bg-transparent",
                "text-black/70",
                "dark:text-white/90",
                "font-semibold",
              ],
              cursor: ["border-2", "border-app-green"],
              indicator: ["bg-app-green"],
            }}
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} value={tab.value} title={tab.label} />
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};
