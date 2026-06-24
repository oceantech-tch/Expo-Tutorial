import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
  // Parse the /push prop' to ensure a new screen is pushed unto the stack. router.push vs replace. The later removes the previous path and prevent you from going back while the other lets you move back.
  // Run 'npx expo-router-sitemap' to view every routes in our application
  // Use Slot if you want to remove the header etc
  // Redirect user back to a page by using Redirect and specify the href
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}>Index Screen</Text>
      <Link href="/second" push>
      Go to second screen
      </Link>
      <Link href="/third" push>
        Go to third screen
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
