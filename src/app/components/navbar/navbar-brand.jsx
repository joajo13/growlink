import { NavbarBrand as NextUiNavbarBrand } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { APP_NAME } from "../../constants/appInfo";

export const NavbarBrand = () => {
  return (
    <NextUiNavbarBrand className="flex justify-center lg:justify-start">
      <Link href="/home">
        <p className="font-bold text-app-green text-2xl">{APP_NAME}</p>
      </Link>
    </NextUiNavbarBrand>
  );
};
