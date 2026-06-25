import Button from "@/components/Button";
import { Text, View, StyleSheet } from "react-native";

export default function ModalWithStackScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}> Modal With Stack Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
