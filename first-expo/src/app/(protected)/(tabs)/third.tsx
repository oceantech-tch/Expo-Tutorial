import Button from "@/components/Button";
import { AuthContext } from "@/utils/authContext";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const params = useLocalSearchParams<{ name?: string }>();
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}>Third Index Screen</Text>
      <Text style={{ fontSize: 18 }}>Hello, {params.name}!</Text>
      <Link href="/" push asChild>
      <Button title="Go back home" />
      </Link>
      <Link href="/" dismissTo asChild>
       <Button title="Dismiss to Home" />
      </Link>
      <br />
      <Button title="Log Out" onPress={authContext.logOut} />
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
