// This is going to be our app's auth state in zustand
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";

type UserState = {
    isLoggedIn: boolean;
    shouldCreateAccount: boolean;
    logIn: () => void;
    logOut: () => void;
};

// export as hook. Persist
export const useAuthStore = create(persist<UserState>((set) => ({
    isLoggedIn: false,
    shouldCreateAccount: true,
    logIn: () => {
        set((state) => {
            return {
                ...state,
                isLoggedIn: true,
            };
        });
    },
    logOut: () => {
        set((state) => {
            return {
                ...state,
                isLoggedIn: false
            };
        });
    },
}), {
    name: "auth-store",
    storage: createJSONStorage(() => ({
        setItem: setItemAsync,
        getItem: getItemAsync,
        removeItem: deleteItemAsync,
    }))
}, ), );