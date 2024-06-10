import { NavbarComponent } from "../components/navbar/navbar";
import { Aside } from "../components/aside/aside";
import { Toaster } from "sonner";

export const metadata = {
  title: "CannaLink",
  description: "CannaLink is a cannabis social network",
};

export default function RootLayout({ children }) {
  return (
    <>
      <NavbarComponent />

      <div className="lg:flex">
        <Aside />
        {children}
        <Toaster />
      </div>
    </>
  );
}
