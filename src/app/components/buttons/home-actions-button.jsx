"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { FiEdit3, FiLogIn, FiPlus } from "react-icons/fi";
import { useUserStore } from "../../../stores/userStore";
import { LoggedDropdownMenu } from "../dropdowns/home-button-dropdowns/logged-dropdown-menu";
import {NotLoggedDropdownMenu} from "../dropdowns/home-button-dropdowns/not-logged-dropdown-menu";

export const HomeActionButton = () => {
  const { userToken } = useUserStore();

  return (
    <div className="absolute right-0 bottom-0 p-2">
      <Dropdown>
        <DropdownTrigger>
          <Button
            isIconOnly
            className="border-none bg-app-green w-14 h-14"
            variant="faded"
            aria-label="Take a photo"
          >
            <FiEdit3 size={24} className="text-white" />
          </Button>
        </DropdownTrigger>

        {!userToken && (
          <NotLoggedDropdownMenu /> 
        )}
        {userToken && (
         <LoggedDropdownMenu />
        )}
        
      </Dropdown>
    </div>
  );
};
