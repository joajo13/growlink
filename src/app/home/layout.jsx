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
      <div className="lg:flex bg-app-white">
        <Aside />
        <main className="min-h-screen-without-navbar max-h-screen-without-navbar overflow-y-auto w-full relative">
          {children}
          <Toaster />
          <footer className="h-64"></footer>
        </main>
      </div>
    </>
  );
}
