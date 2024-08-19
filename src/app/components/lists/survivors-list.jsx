"use client";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { imgPaths } from "../../constants/mockups";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const SurvivorsList = ({ currentsStrains }) => {
  const [imgPath, setImgPath] = useState(
    imgPaths.find((path) => path.type === "strain")?.imgPath || ""
  );
  const [survivors, setSurvivors] = useState(
    currentsStrains.map((strain) => ({ id: strain.id, count: 0 }))
  );

  const handleAdd = (id) => {
    setSurvivors((prevSurvivors) =>
      prevSurvivors.map((survivor) =>
        survivor.id === id &&
        survivor.count <
          currentsStrains.find((strain) => strain.id === id).amount
          ? { ...survivor, count: survivor.count + 1 }
          : survivor
      )
    );
  };

  const handleSubtract = (id) => {
    setSurvivors((prevSurvivors) =>
      prevSurvivors.map((survivor) =>
        survivor.id === id && survivor.count > 0
          ? { ...survivor, count: survivor.count - 1 }
          : survivor
      )
    );
  };

  return (
    <div className="py-4">
      <div className="py-1">
        <div className="flex items-center">
          <h3 className="text-app-green font-semibold text-lg">
            Specify the survivors
          </h3>
        </div>
      </div>
      <div className="py-2 max-h-44 overflow-y-auto relative">
        {currentsStrains.map((strain, index) => (
            <div
            key={strain.id}
            className="border-b flex justify-between items-center py-2 px-2"
            >
            <div className="flex justify-start items-center gap-2">
              <Image
                isBlurred
                src={`${imgPath}${strain.imgPath}`}
                width={30}
                height={30}
                alt={strain.label}
              />
              <h1>{strain.label}</h1>
            </div>
            <div className="flex justify-end items-center gap-2">
              <div className="flex gap-2 items-center justify-between">
                <Button
                  variant="light"
                  size="sm"
                  color="danger"
                  isIconOnly
                  onClick={() => handleSubtract(strain.id)}
                >
                  <FaMinus className="text-app-red" />
                </Button>

                <h1>
                  {survivors.find((survivor) => survivor.id === strain.id)
                    ?.count || 0}
                </h1>

                <span className="text-slate-500 text-small italic">
                  Of {strain.amount}
                </span>

                <Button
                  variant="light"
                  size="sm"
                  color="success"
                  isIconOnly
                  onClick={() => handleAdd(strain.id)}
                >
                  <FaPlus className="text-app-green" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
