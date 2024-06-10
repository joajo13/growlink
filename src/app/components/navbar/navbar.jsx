'use client';

import {
  Navbar,
} from "@nextui-org/navbar";
import { NavbarAvatarItem } from "./navbar-avatar-item";
import { NavbarBrand } from "./navbar-brand";
import { NavbarMenu } from "./navbar-menu";
import { NavbarMenuButton } from "./navbar-menu-button";
import { useState } from "react";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar maxWidth="full" className="bg-app-white" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuButton />

      <NavbarBrand />

      <NavbarAvatarItem />

      <NavbarMenu />
    </Navbar>
  );
};
