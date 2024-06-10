import { NavbarContent as NextUiNavbarContent } from "@nextui-org/navbar";
import { InputSearch } from "../inputs/input-search";

export const NavbarContent = () => {
  return (
    <NextUiNavbarContent
      as="div"
      className="hidden lg:flex gap-4 w-1/2"
      justify="center"
    >
      {/* <InputSearch /> */}
    </NextUiNavbarContent>
  );
};
