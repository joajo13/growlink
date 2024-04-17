import { useStore } from "zustand";

export const useUserStore = useStore((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
}));