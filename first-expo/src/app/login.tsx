import Button from "@/components/Button";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
    // Call authContext here to make use of the login function
    const authContext = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <br />
            <Button title="Log In" onPress={authContext.logIn} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "600"
    }
})