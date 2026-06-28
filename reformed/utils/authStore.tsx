// This is going to be our app's auth state in zustand
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";

type UserState = {
    isLoggedIn: boolean;
    shouldCreateAccount: boolean;
    hasCompletedOnboarding: boolean;
    isVip: boolean;
    logIn: () => void;
    logOut: () => void;
    completeOnboarding: () => void;
    resetOnboarding: () => void;
    logInAsVip: () => void;
};

// export as hook. Persist
export const useAuthStore = create(persist<UserState>((set) => ({
    isLoggedIn: false,
    shouldCreateAccount: true,
    hasCompletedOnboarding: false,
    isVip: false,
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
                isLoggedIn: false,
                isVip: false
            };
        });
    },
    completeOnboarding: () => {
        set((state) => {
            return {
                ...state,
                hasCompletedOnboarding: true, 
            }
        });
    },
    resetOnboarding: () => {
        set((state) => {
            return {
                ...state,
                hasCompletedOnboarding: false,
            }
        })
    },
    logInAsVip: () => {
        set((state) => {
            return {
                ...state,
                isVip: true,
                isLoggedIn: true,
            }
        })
    }
}), {
    name: "auth-store",
    storage: createJSONStorage(() => ({
        setItem: setItemAsync,
        getItem: getItemAsync,
        removeItem: deleteItemAsync,
    }))
}, ), );