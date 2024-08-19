"use client";
import React, { useState } from "react";
import {
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { FaMinus, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { Avatar, Button, Image, Input } from "@nextui-org/react";
import PropTypes from "prop-types";
import { imgPaths } from "../../constants/mockups";

export const MultipleSelect = ({ title, initialOptions, type, startIcon, addText }) => {
  const [selectedOption, setSelectedOptions] = useState([]);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [options, setOptions] = useState(initialOptions);
  const [counter, setCounter] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [imgPath, setImgPath] = useState(
    imgPaths.find((path) => path.type === type)?.imgPath || ""
  );

  const handleAddSelectedOption = (selectedOptionId) => {
    const option = initialOptions.find(
      (option) => option.id == selectedOptionId
    );

    const newOption = {
      ...option,
      uniqueId: `${option.id}-${counter}`,
      amount: 1,
    };

    setSelectedOptions([...selectedOption, newOption]);
    setCounter(counter + 1);
    onClose();
  };

  const handleRemoveOption = (lightUniqueId) => {
    setSelectedOptions(
      selectedOption.filter((light) => light.uniqueId !== lightUniqueId)
    );
  };

  const handlePlus = (lightUniqueId) => {
    setSelectedOptions(
      selectedOption.map((light) =>
        light.uniqueId === lightUniqueId
          ? { ...light, amount: light.amount + 1 }
          : light
      )
    );
  };

  const handleMinus = (lightUniqueId) => {
    setSelectedOptions(
      selectedOption.map((light) => {
        if (light.uniqueId === lightUniqueId) {
          if (light.amount > 1) {
            return { ...light, amount: light.amount - 1 };
          }
        }
        return light;
      })
    );
  };

  return (
    <>
      <div className="flex items-center py-4 mt-4">
        {startIcon}
        <h2 className="text-app-green font-semibold text-xl">{title}</h2>
      </div>

      <div className="flex overflow-y-auto gap-2">
        <button
          className="flex justify-center items-center bg-green-300/20 hover:bg-green-400/30 transition-all duration-300 rounded-xl p-4 px-8 flex-col h-[325px] min-w-40 w-40"
          onClick={onOpen}
        >
          <FaPlus className="text-app-green" size={22} />
          <h2 className="text-lg text-app-green font-semibold">
            Add {addText.toLowerCase()}
          </h2>
        </button>

        {selectedOption.map((option) => (
          <div
            className="bg-slate-400/20 flex flex-col justify-between items-center border-b py-8 px-8 h-[325px] min-w-40 w-40 rounded-xl"
            key={option.uniqueId}
          >
            <div className="flex flex-col justify-center items-center">
              <Image src={`${imgPath}${option.imgPath}`} size="md" isBlurred alt={`${option.label} image`} />

              <div className="flex justify-center items-center flex-col text-center">
                <h2 className="text-black/70 dark:text-white/90font-semibold text-md">
                  {option.label}
                </h2>

                <div className="flex justify-center items-center gap-1">
                  {option.secondLabel ? (
                    <p className="text-black/50 dark:text-white/70font-semibold text-sm">
                      {option.secondLabel}
                    </p>
                  ) : null}

                  {option.thirdLabel ? (
                    <p className="text-blue-500 dark:text-white/70font-semibold text-sm">
                      {option.thirdLabel}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <Button
                variant="light"
                size="sm"
                color="danger"
                isIconOnly
                onClick={() => handleMinus(option.uniqueId)}
              >
                <FaMinus className="text-app-red" />
              </Button>

              <h2 className="text-black/70 dark:text-white/90font-semibold text-md">
                {option.amount}
              </h2>

              <Button
                variant="light"
                size="sm"
                color="success"
                isIconOnly
                onClick={() => handlePlus(option.uniqueId)}
              >
                <FaPlus className="text-app-green" />
              </Button>
            </div>

            <Button
              variant="solid"
              size="sm"
              isIconOnly
              className="bg-app-red text-app-white"
            >
              <FaTrash onClick={() => handleRemoveOption(option.uniqueId)} />
            </Button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        size="2xl"
        placement="bottom"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="px-3">
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text-2xl text-app-green font-semibold">
                      Select a {title.toLowerCase()}
                    </h2>
                  </div>
                  <div className="w-full">
                    <Input
                      type="text"
                      size="sm"
                      endContent={<FaSearch className="text-app-green" />}
                      placeholder="Search"
                      classNames={{
                        inputWrapper: [
                          "bg-transparent",
                          "border-2 border-app-green",
                        ],
                      }}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </div>
              </ModalHeader>

              <ModalBody className="gap-0 px-2">
                {options.map((option) => (
                  <div
                    className="flex justify-between items-center border-b py-2 hover:bg-slate-400/10 cursor-pointer"
                    key={option.id}
                    onClick={() => handleAddSelectedOption(option.id)}
                  >
                    <div className="flex justify-start items-center">
                      <Avatar src={`${imgPath}${option.imgPath}`} size="md" />

                      <div>
                        <h2 className="text-black/70 dark:text-white/90 ml-4 font-semibold text-md">
                          {option.label}
                        </h2>

                        {option.secondLabel ? (
                          <p className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
                            {option.secondLabel}
                          </p>
                        ) : null}

                        {option.thirdLabel ? (
                          <p className="text-black/50 dark:text-white/70 ml-4 font-semibold text-sm">
                            {option.thirdLabel}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <FaPlus
                      className="text-app-green mr-2"
                      onClick={() => handleAddSelectedOption(option.id)}
                    />
                  </div>
                ))}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

MultipleSelect.propTypes = {
  title: PropTypes.string.isRequired,
  initialOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imgPath: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      secondLabel: PropTypes.string,
    })
  ).isRequired,
};
