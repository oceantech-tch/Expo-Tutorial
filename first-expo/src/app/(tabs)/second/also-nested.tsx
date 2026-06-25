import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";

export default function Index() {
  const params = useLocalSearchParams<{ name?: string }>();

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}>Also Nested Screen</Text>
      {/* <Text style={{ fontSize: 18 }}>Hello, {params.name}!</Text>
      <Link href="/third" asChild push>
      <Button title="Go to third screen" />
      </Link>
      <Link href={{ pathname: "/third", params: { name: "User" }}} asChild push>
       <Button title="Greet user" />
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff00ff"
  },
});
