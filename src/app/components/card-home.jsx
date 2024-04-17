"use client";
import { Avatar, Link, Button, Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoHeartOutline, IoHeartDislikeOutline } from "react-icons/io5";
export const CardHome = ({
  title,
  weeks: weeksAmount,
  imgPath,
  userImgPath,
  user,
  strains,
  currentWeekType,
  isLiked,
}) => {
  const [strainsState, setStrainsState] = useState(strains);

  useEffect(() => {
    if (strains.length >= 2) {
      setStrainsState([strains[0], strains[1]]);
    }
  }, []);

  return (
    <div className="w-full rounded-none p-2 lg:flex lg:flex-row z-10 bg-app-white md:px-8">
      <div className="max-h-[400px] md:max-h-[350] w-full lg:max-w-[700px] overflow-hidden flex justify-center items-center rounded-xl mb-4 relative">
        <Link className="cursor-pointer">
          <img
            src={`/resources/blogs-covers/${imgPath}`}
            alt="cover"
            className="h-full w-full object-center object-contain"
          />
        </Link>
        <div
          className={`absolute bottom-0 right-0 text-white  ${
            currentWeekType == "flowering"
              ? "bg-app-green"
              : currentWeekType == "vegetation"
              ? "bg-orange-500"
              : "bg-red-950"
          } py-1 px-2 rounded-tl-lg`}
        >
          <span className="">{weeksAmount} Semanas</span>
        </div>
      </div>

      <div className="lg:ml-4 block lg:flex flex-col justify-between w-full">
        <div>
          <div className="flex justify-start items-center">
            <Link href="/">
              <Avatar
                className="border-3 border-app-green"
                src={`/resources/users-pfp/${userImgPath}`}
              />
            </Link>
            <div className="flex flex-col items-start justify-center">
              <Link className="cursor-pointer text-black hover:text-app-green transition-all duration-150">
                <h4 className="text-4xl font-bold text-center ml-2">{title}</h4>
              </Link>
              <Link className="cursor-pointer">
                <p className="text-gray-500 text-sm ml-2">@{user}</p>
              </Link>
            </div>
          </div>

          <div className="flex justify-start items-center mt-2 ml-12 gap-1">
            {strainsState.map((strain, index) => (
              <Link key={index} href="/" className="cursor-pointer">
                <Avatar
                  className="border-none h-8 w-8 border-app-green rounded-md"
                  src={`/resources/productors-pfp/${strain.productorPfp}`}
                />
              </Link>
            ))}
            {strains.length > 2 && (
              <span className="text-gray-500">+{strains.length - 2} more</span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center ml-12 mt-1">
          <div className="flex justify-start items-center">
            <div className="h-1 w-1 rounded-full bg-gray-500 mr-1 "></div>
            <p className="text-gray-500 text-sm">5 minutes ago</p>
          </div>
          <div className="flex justify-end items-center mr-2 gap-2">
            <Button isIconOnly variant="faded" className="border-none">
              <FaRegCommentAlt className="text-gray-500 mr-1" />
              <span className="text-gray-500">5</span>
            </Button>
            <Button isIconOnly variant="faded" className="border-none">
              {isLiked ? (
                <IoHeartOutline className="text-red-500 mr-1" />
              ) : (
                <IoHeartOutline className="text-gray-500 mr-1" />
              )}
              <span className="text-gray-500">5</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
