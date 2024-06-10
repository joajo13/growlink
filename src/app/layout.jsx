import "./globals.css";
import { Providers } from "./components/providers/providers";
import { NavbarComponent } from "./components/navbar/navbar";
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
              {children}
          </Providers>
      </body>
    </html>
  );
}