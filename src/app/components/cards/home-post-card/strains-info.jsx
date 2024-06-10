import { Avatar, Link } from "@nextui-org/react";

export const StrainsInformation = ({ strains = [] }) => {
  return (
    <div className="flex justify-start items-center mt-2 ml-12 gap-1">
      {strains?.map((strain, index) => (
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
  );
};
