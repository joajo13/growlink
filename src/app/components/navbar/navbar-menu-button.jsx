'use client';
import { NavbarContent, NavbarMenuToggle } from "@nextui-org/navbar"

export const NavbarMenuButton = () => {
  return (
    <NavbarContent justify="start" className="block lg:hidden">
        <NavbarMenuToggle />
      </NavbarContent>
  )
}