import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Declare types
type AuthState = {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
    isReady: boolean;
};

// Define a key.
const authStorageKey = "auth-storage-key";

// Create auth context
export const AuthContext = createContext<AuthState>({
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {},
    isReady: false,
});

// Create provider, declare children and write logic (values) get axcess to router to navigate through paths. We use AsyncStorage to persists auth states, lets mimick it
export function AuthProvider({ children }: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false) // Ensure values are actually available
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    
    const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
        try {
            // convert Auth state obj into string because AsyncStorage can only store key value strings

            const jsonValue = JSON.stringify(newState);

            // set items
            await AsyncStorage.setItem(authStorageKey, jsonValue);
        } catch (error) {
            console.log("Error saving", error);
        }
    }

    const logIn = () => {
        setIsLoggedIn(true);
        router.replace("/");
        storeAuthState({ isLoggedIn: true });
    };

    const logOut = () => {
        setIsLoggedIn(false);
        router.replace("/login");
        storeAuthState({ isLoggedIn: false });
    };

    // Ensure the values are fetched correctly on app launch
    useEffect(() => {
        const getAuthFromStorage = async () => {
            try {
               const value = await AsyncStorage.getItem(authStorageKey);
               if (value !== null) {
                const auth = JSON.parse(value);
                setIsLoggedIn(auth.isLoggedIn);
               }
            } catch (error) {
                console.log("Error fetching", error);
            } finally {
                setIsReady(true);
            }
        }
        getAuthFromStorage();
    }, []);
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, isReady }}>
            {children}
        </AuthContext.Provider>
    )
}