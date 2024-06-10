import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      userToken: "",
      user: {
        username: "",
        email: "",
        pfp: "",
      },
      handleLogin: (token, userParam) =>
        set({
          userToken: token,
          user: {
            username: userParam.username,
            email: userParam.email,
            pfp: userParam.pfp,
          },
        }),
      handleLogout: () => {
        set({
          userToken: "",
          user: {
            username: "",
            email: "",
            pfp: "",
          },
        });
        console.log("Logged out");
      },
    }),
    {
      name: "user-storage",
    }
  )
);
