import { Link } from "@nextui-org/link";
import { Avatar } from "@nextui-org/avatar";

export const GrowInfo = ({userImgPath, title, user}) => {
  return (
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
  );
};
