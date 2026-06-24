import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
  // Parse the /push prop' to ensure a new screen is pushed unto the stack. router.push vs replace. The later removes the previous path and prevent you from going back while the other lets you move back.
  // Run 'npx expo-router-sitemap' to view every routes in our application
  // Use Slot if you want to remove the header etc
  // Redirect user back to a page by using Redirect and specify the href
  // asChild prop is used to pass a keystroke to a nested component e.g., a Button inside a Link component

  // push = index - second - third ..., when you go back, you go the same amount of screens back

  // dismissTo = index - second - third ..., click the second button to dismissTo (index), this will clear previous screens and take you back no matter how many screens you've pushed unto the stack. 

  // replace - replace current screen with a new one = index - second - third - replace(second) = index - second, you cannot go back to third screen because it has been replaced by the second screen

  //All these are used to navigate between screens in the application. Another method is the useRouter() hook which is used to navigate betwn screens. It also has methods like push, replace, and back to navigate between screens. The difference is that the Link component is used to go between screens using a btn or link while useRouter() is used to navigate between screens programatically.

  // Let's talk about how to parse params between screens. - we use useLocalSearchParams() hook to parse params btwn screens. We specify the pathname and params in the href prop of the Link component, this params is then extracted in the mext screen using this useLocalSearchParams() hook. We can also use the useSearchParams() hook to parse params but this is used to parse params in the url not on the screen. Note: specifying the same route does not mean the params will be extracted on the next screen, we need to press the button we specified the params in to extract the params on the next screen. We can also perform the same navigation using useRouter() hook by specifying the pathname and params in the push method of the router object.

  // Let's talk about Dynamic routes. We can create a dynamic route by specifying the route name in square brackets e.g., [name].tsx, this will create a dynamic route that can be accessed by specifying the route name. /proverbs/[id]. The dynamic route method is very useful when we want to create a route that can be accessed by specifying w parameter in the url. The example we used in this project is the /proverbs/[id] route. We can access this route by specifying the id in the url e.g., /proverbs/1, /proverbs/2 ... and it'll loop through the arr and display them dynamically.

  // Let's talk about nested dynamic routes. We can have multiple dynamic paths in one routes. Let's do something like this: /products/[category]/[productId]. cont.. /products/[category]/[productId]. A nested dynamic route is simply a dynamic route inside another one.

  // SCREEN OPTIONS: Go to _layout.tsx for more...

  // SCREEN ANIMATION: We can specify the screen animation using the screenOptions prop of the Stack component. On iOS the screen slide in from the right by default while on Android we have a slight fade in effect.



    <View style={styles.container}>
      <Text style={{ fontWeight: "700" }}>Index Screen</Text>
      <Button title="Go to second screen" onPress={() => router.push("/second")} />
      <Link href={{ pathname:"/second", params: { name: "Ocean" } }} asChild>
        <Button title="Greet at /second" color="#f00" />
      </Link>
      <Button title="Greet Mary on /third" onPress={() => router.push({
        pathname: "/third",
        params: { name: "Mary" },
      })} />
      <Button title="View Proverb" onPress={() => router.push({ pathname: "/proverbs/[id]", params: { id: "2" } })} />
        <Button title="View Product" onPress={() => router.push({
          pathname: "/products/[category]/[productId]",
          params: { category: "Shoes", productId: "1234"}
        })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00ff00"
  },
});
