

import Button from "@/components/Button";
import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, Alert } from "react-native";

export default function Index() {
  const router = useRouter();
  const openModal = () => {
    console.log("Button clicked");
    Alert.alert("Hello!")
  }
  return (
    <View style={styles.container}>
      <Text>Home Screen {"\n"}</Text>
        <Button title="Open modal" onPress={() => router.push("/modal")} />
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
