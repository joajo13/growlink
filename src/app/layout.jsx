import "./globals.css";
import { Providers } from "./components/providers/providers";

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