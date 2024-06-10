// import { useUserStore } from "@/stores/userStore";
// import {
//   Button,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownTrigger,
// } from "@nextui-org/react";
// import { Avatar } from "../avatar/avatar";

export const NavbarAvatar = () => {
  //const userToken = useUserStore((state) => state.userToken);

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            auto
            size="md"
            variant="solid"
            className="flex items-center gap-2 border-2 border-app-green"
            isIconOnly
          >
            <Avatar imgSrc="default.png" />
          </Button>
        </DropdownTrigger>

        {userToken ? (
          <DropdownMenu aria-label="User menu">
            <DropdownItem key="profile" href="/profile">
              Profile
            </DropdownItem>
            <DropdownItem key="logout" href="/">
              Logout
            </DropdownItem>
          </DropdownMenu>
        ) : (
          <DropdownMenu aria-label="Guest menu">
            <DropdownItem key="login" href="/login">
              Login
            </DropdownItem>
            <DropdownItem key="signup" href="/signup">
              Signup
            </DropdownItem>
          </DropdownMenu>
        )}

      </Dropdown>
    </>
  );
};
