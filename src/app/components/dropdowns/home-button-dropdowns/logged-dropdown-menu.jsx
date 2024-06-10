import { DropdownItem, DropdownMenu } from "@nextui-org/dropdown";
import { FiEdit3, FiPlus } from "react-icons/fi";

export const LoggedDropdownMenu = () => {
  return (
    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
      <DropdownItem
        key="new"
        className="text-app-green"
        description="Add a new grow monitoring"
        startContent={<FiEdit3 />}
      >
        New file
      </DropdownItem>
      <DropdownItem
        key="copy"
        className="text-app-dark-green"
        description="Edit a grow"
        startContent={<FiPlus />}
      >
        Edit
      </DropdownItem>
    </DropdownMenu>
  );
};
