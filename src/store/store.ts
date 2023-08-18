import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { Token } from "../types/token";

export const useTokenStore = create(
  persist(
    combine({ token: null as null | Token }, (set) => ({
      insert: (token: Token) => set(() => ({ token: token })),
    })),
    {
      name: "token-storage",
    }
  )
);
