import { Text, View } from "react-native";

export default function Nested() {
    return (
        <>
         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>Nested Screen</Text>
         </View>
        </>
    )
}