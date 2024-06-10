"use client";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { StrainsInformation } from "./strains-info";
import { CoverImage } from "./cover-image";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { CommentModal } from "../../modals/comment-modal";
import { GrowInfo } from "./grow-info";

export const CardHome = ({
  title,
  weeks: weeksAmount,
  coverImage,
  userImgPath,
  user,
  strains,
  currentWeekType,
  isLiked
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full rounded-none p-2 lg:flex lg:flex-row z-10 bg-app-white md:px-8">
        <CoverImage
          coverImagePath={coverImage}
          currentWeekType={currentWeekType}
          weeksAmount={weeksAmount}
        />

        <div className="lg:ml-4 block lg:flex flex-col justify-between w-full">

          <GrowInfo userImgPath={userImgPath} title={title} user={user} />

          <StrainsInformation strains={strains} />

          <div className="flex justify-between items-center ml-12 mt-1">
            <div className="flex justify-start items-center">
              <div className="h-1 w-1 rounded-full bg-gray-500 mr-1 "></div>
              <p className="text-gray-500 text-sm">5 minutes ago</p>
            </div>

            <div className="flex justify-end items-center mr-2 gap-2">
              <Button
                isIconOnly
                variant="faded"
                className="border-none"
                onClick={onOpen}
              >
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

      <CommentModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onOpen={onOpen}
      />
    </>
  );
};
