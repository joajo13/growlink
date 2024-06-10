
import { Link, NavbarMenuItem, NavbarMenu as NextUiNavbarMenu } from "@nextui-org/react"
import { InputSearch } from "../inputs/input-search"

export const NavbarMenu = () => {
  return (
    <NextUiNavbarMenu className="bg-app-white">
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            {/* <InputSearch /> */}
          </Link>
        </NavbarMenuItem>
      </NextUiNavbarMenu>
  )
}