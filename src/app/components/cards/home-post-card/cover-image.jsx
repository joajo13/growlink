import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export const CoverImage = ({
  coverImagePath,
  weeksAmount,
  currentWeekType,
}) => {
  return (
    <div className="md:max-h-[600px] w-full lg:max-w-[500px] overflow-hidden flex justify-center items-center rounded-xl mb-4 relative">
      <Link className="cursor-pointer">
        <Image
          isZoomed
          src={`/resources/blogs-covers/${coverImagePath}`}
          alt="cover"
          className="object-center object-contain"
          width="100%"
          height={900}
        />
      </Link>
      <div
        className={`absolute bottom-0 right-0 z-10 text-white lg:hidden ${
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
  );
};
