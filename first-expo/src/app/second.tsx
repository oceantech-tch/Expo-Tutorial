import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}>Second Index Screen</Text>
      <Pressable onPress={() => router.push("/third")}>
        <Text>Go to third screen</Text>
      </Pressable>
      <Link href="/" asChild push>
      <Text>Push to home screen</Text>
      </Link>
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
