"use client";
import { NavbarContent } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useUserStore } from "../../../stores/userStore";
import { Avatar } from "../../components/avatar/avatar";
import { FiAtSign, FiLogIn, FiLogOut, FiUser } from "react-icons/fi";

export const NavbarAvatarItem = () => {
  const { user, userToken, handleLogout } = useUserStore();
  return (
    <NavbarContent as="div" justify="end">
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly className="border-3 border-app-green">
            {user.pfp ? (
              <Avatar imgSrc={user.pfp} />
            ) : (
              <Avatar imgSrc="default.png" />
            )}
          </Button>
        </DropdownTrigger>

        {userToken ? (
          <DropdownMenu aria-label="Menu user">
            <DropdownItem href="/profile" startContent={<FiUser />}>
              Profile
            </DropdownItem>
            <DropdownItem className="text-danger" onClick={() => handleLogout()} startContent={<FiLogOut/>}>
              Log out
            </DropdownItem>
          </DropdownMenu>
        ) : (
          <DropdownMenu aria-label="Menu guest">
            <DropdownItem href="/auth" startContent={<FiLogIn />}>
              Log in
            </DropdownItem>
            <DropdownItem href="/auth" startContent={<FiAtSign />}>
              Sign up
            </DropdownItem>
          </DropdownMenu>
        )}
      </Dropdown>
    </NavbarContent>
  );
};
