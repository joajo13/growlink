import { DropdownItem, DropdownMenu } from "@nextui-org/dropdown";
import { FiEdit3 } from "react-icons/fi";
import { GrGrow } from "react-icons/gr";
import { useUserStore } from "../../../../stores/userStore";

export const LoggedDropdownMenu = () => {

  const { user } = useUserStore();

  return (
    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
      <DropdownItem
        key="new"
        className="text-app-green"
        description="Add a new grow monitoring"
        startContent={<FiEdit3 />}
        href="/home/grows/new"
      >
        New grow
      </DropdownItem>
      <DropdownItem
        key="copy"
        className="text-app-dark-green"
        description="See my grows"
        startContent={<GrGrow />}
        href={`/home/grows/${user.username}`}
      >
        My grows
      </DropdownItem>
    </DropdownMenu>
  );
};
