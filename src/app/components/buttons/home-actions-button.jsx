"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { FiEdit3, FiLogIn, FiPlus } from "react-icons/fi";
import { LoggedDropdownMenu } from "../dropdowns/home-button-dropdowns/logged-dropdown-menu";
import {NotLoggedDropdownMenu} from "../dropdowns/home-button-dropdowns/not-logged-dropdown-menu";
import { useSession } from "next-auth/react";

export const HomeActionButton = () => {
  const { data: session } = useSession();
  const token = session?.user?.token;

  return (
    <div className="fixed right-4 bottom-4 p-2 z-50">
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

        {!token && (
          <NotLoggedDropdownMenu /> 
        )}
        {token && (
         <LoggedDropdownMenu />
        )}
        
      </Dropdown>
    </div>
  );
};
