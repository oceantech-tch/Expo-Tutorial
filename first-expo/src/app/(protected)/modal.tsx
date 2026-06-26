import Button from "@/components/Button";
import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}> Modal Screen</Text>
      
       <Button title="Push to /modal-with-stack/nested" onPress={() => router.push("/model-with-stack/nested")} />
       
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
