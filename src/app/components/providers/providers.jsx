"use client";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>{children}</NextUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};
