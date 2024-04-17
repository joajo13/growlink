"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Link,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { InputSearch } from "./input-search";

export const NavbarComponent = () => {

  return (
    <Navbar maxWidth="full" className="bg-app-white">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2">
          <p className="font-bold text-app-green text-2xl">CannaLink</p>
        </Link>
      </NavbarBrand>

      <NavbarContent
        as="div"
        className="hidden md:flex gap-4 w-1/2"
        justify="center"
      >
        <InputSearch />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar className="border-3 border-app-green" />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
          ></DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className="bg-app-white">
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            <InputSearch />
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};