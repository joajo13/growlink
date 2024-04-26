import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavbarComponent } from "./components/navbar";
import { Aside } from "./components/aside/aside";

export const metadata = {
  title: "CannaLink",
  description: "CannaLink is a cannabis social network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NavbarComponent />
          
          <div className="lg:flex">
            <Aside />
            {children}
          </div>
          
        </Providers>
      </body>
    </html>
  );
}
