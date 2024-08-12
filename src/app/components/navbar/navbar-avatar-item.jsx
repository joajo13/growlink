"use client";
import { NavbarContent } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "../../components/avatar/avatar";
import { FiAtSign, FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"

export const NavbarAvatarItem = () => {
  const {data, status} = useSession();

  if (status === 'loading') 
    return (
      <NavbarContent as="div" justify="end">
        <Button isIconOnly className="border-3 border-app-green">
          <Avatar imgSrc="default.png" />
        </Button>
      </NavbarContent>
    ) 

    return (
    <NavbarContent as="div" justify="end">
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly className="border-3 border-app-green">
            {status === 'authenticated' ? (
              data.user.pfp ? (
                <Avatar imgSrc={''} />
              ) : (
                <Avatar imgSrc="default.png" />
              )
            ) : (
              <Avatar imgSrc="default.png" />
            )}
          </Button>
        </DropdownTrigger>

        {status === 'authenticated' ? (
          <DropdownMenu aria-label="Menu user">
            <DropdownItem href="/profile" startContent={<FiUser />}>
              Profile
            </DropdownItem>
            <DropdownItem className="text-danger" onClick={() => signOut()} startContent={<FiLogOut/>}>
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
