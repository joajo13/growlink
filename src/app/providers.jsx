'use client';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }) => {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        themes={["light", "dark", "system"]}
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

