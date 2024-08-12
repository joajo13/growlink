import { DropdownItem, DropdownMenu } from "@nextui-org/dropdown"
import { FiLogIn } from "react-icons/fi"

export const NotLoggedDropdownMenu = () => {
  return (
    <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
          >
            <DropdownItem
              key="login"
              className="text-app-green"
              description="Login to add a new grow monitoring"
              startContent={<FiLogIn />}
              href="/auth"
            >
              Log in
            </DropdownItem>
          </DropdownMenu>
  )
}