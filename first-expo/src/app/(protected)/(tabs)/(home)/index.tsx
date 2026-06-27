import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet, Alert, Button, Modal } from "react-native";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenAlert = () => {
    // console.log("Alert...")
    // Alert.alert("Hello"); - This works on mobiles, browser is killing it
    alert("Hello");
    Alert.alert("Warning!", "Are you sure you want to proceed?", [
        { text: "Cancel", style: "cancel" },
        { text: "Confirm", style: "destructive", onPress: () => { console.log("Let's go!")}}
    ])
  };

  
  return (
  // Parse the /push prop' to ensure a new screen is pushed unto the stack. router.push vs replace. The later removes the previous path and prevent you from going back while the other lets you move back.
  // Run 'npx expo-router-sitemap' to view every routes in our application
  // Use Slot if you want to remove the header etc
  // Redirect user back to a page by using Redirect and specify the href
  // asChild prop is used to pass a keystroke to a nested component e.g., a Button inside a Link component

  // push = index - second - third ..., when you go back, you go the same amount of screens back

  // RUN 'npx expo-router-sitemap' to list all available routes in our application after installing the package using npx expo install @expo-router-sitemap

  // dismissTo = index - second - third ..., click the second button to dismissTo (index), this will clear previous screens and take you back no matter how many screens you've pushed unto the stack. 

  // replace - replace current screen with a new one = index - second - third - replace(second) = index - second, you cannot go back to third screen because it has been replaced by the second screen

  //All these are used to navigate between screens in the application. Another method is the useRouter() hook which is used to navigate betwn screens. It also has methods like push, replace, and back to navigate between screens. The difference is that the Link component is used to go between screens using a btn or link while useRouter() is used to navigate between screens programatically.

  // Let's talk about how to parse params between screens. - we use useLocalSearchParams() hook to parse params btwn screens. We specify the pathname and params in the href prop of the Link component, this params is then extracted in the mext screen using this useLocalSearchParams() hook. We can also use the useSearchParams() hook to parse params but this is used to parse params in the url not on the screen. Note: specifying the same route does not mean the params will be extracted on the next screen, we need to press the button we specified the params in to extract the params on the next screen. We can also perform the same navigation using useRouter() hook by specifying the pathname and params in the push method of the router object.

  // Let's talk about Dynamic routes. We can create a dynamic route by specifying the route name in square brackets e.g., [name].tsx, this will create a dynamic route that can be accessed by specifying the route name. /proverbs/[id]. The dynamic route method is very useful when we want to create a route that can be accessed by specifying w parameter in the url. The example we used in this project is the /proverbs/[id] route. We can access this route by specifying the id in the url e.g., /proverbs/1, /proverbs/2 ... and it'll loop through the arr and display them dynamically.

  // Let's talk about nested dynamic routes. We can have multiple dynamic paths in one routes. Let's do something like this: /products/[category]/[productId]. cont.. /products/[category]/[productId]. A nested dynamic route is simply a dynamic route inside another one.

  // SCREEN OPTIONS: Go to _layout.tsx for more...

  // SCREEN ANIMATION: We can specify the screen animation using the screenOptions prop of the Stack component. On iOS the screen slide in from the right by default while on Android we have a slight fade in effect.

  // NAVIGATION BAR: We create a navigation bar using the Tab component for each screen inside the _layout file. We specified the tabBarIcon prop by using the MaterialCommunityIcons component to display an icon. We implemented a few options and a badge was added to the third screen. We also specified the tabBarActiveTintColor prop that changes the color of a tab when it's active. We also hides a couple of screens from the tab bar by using the 'href: null' prop. We can explore more of this wonderful features.

  // STACK NAVIGATOR: By creating a folder, we can create a stack navigator. e.g., the 'second' folder contains three screens, we can navigate through all screens within this folder. But there's a catch, creating different screens will only multiply the tab bar icons. To avoid this, we can create a _layout.tsx file inside the 'second' folder and specify the stack component to wrap. Stack navigator lets us nagivate through screens within a folder without multiplying the tab bar icons. This is a useful feature in prod if we were to build a screen that go through another layer by layer.

  // REMOVE DUPLICATE TITLES: Initially, the 'second' screen's childre were displaying duplicate titles, one being a title from tabs and the other from the Stack Navigator. All we had to do was go into the root layout and set 'headerShown: false' for that Stack Navigator folder and then assign each of the nested files in themselves.

  // Add Stack Navigator to index route. Here we want to move the root index into a group folder called home. Without the grouping '()', if we start our app it will fail even after specifying the correct route name therefore we have to turn it into a grouping folder. -- Create a home grouping folder and move the root index file into it. Remember you have to change the path in our root layout file. We created a file and modified the screen headers and set a title to it. This let us add a stack navigator to index route.

  // First screen to open = When we first open our app, the index screen will always be the first one rendered, to set a specific screen to be displayed first, we must use redirect()

  // EXTRA: Our nested screen '/third' has a behavior where after navigating into the inner screens, clicking on the navigator will return it back, to prevent this behavior we set popToTopOnBlur: true in the root layout stack

  // To prevent us from seeing the animation whwn navigating between the nested screens to another, we go into the Layout file inside the /second folder and fetch the pathname using the usePathname() hook. The usePathname hook is used to feth the pathname of a current screen. After getting it, we can manipulate it, check /second/_layout.tsx for sample

  // Tab bar back action: Another interesting thing is how the tabs history works, here we will implement a 'Back' button to the index file by making use of the router.back(), we add this buttons to all our screens, but there's a catch to this, it is currently in dev stage so we need to check if we can go back using router.canGoBack(), check below for sample. The logic is to declare router using useRouter() hook, canGoBack from router.back(), and then we declare a conditional display for the 'Back' button. This works but doesn't make the flow to go in order, to fix this we add a 'backBehavior' prop in the Tabs component in the RootLayout() file, add it to the Tabs Wrapper and set the value to "order"

  // USING MODALS IN EXPO ROUTER: 
  // Alert. The 'Alert' is platform specific it will look different on each platforms. We use alert() in this example since we are testing through the web

  // React Native Modal: 
  // The react native modal was built using the Modal component that was imported from react-native, we use it along with useRouter hook to set a push method. We declared a modal state and open and closes the Modal onPress.

  // Expo Router Modal
  // I love this as it is quite operational, both are good but this is preferable by me. We moved every folder into a new grouped folder called '(home)' then we created a new RootLayout file, we created a new modal file inside it and we call this modal from the landing screen. This behavior is more straightforward and practical as there's a couple prop add-ons such as the 'presentation: "modal"' prop that was passed into the Stack component options inside the layout file.

  // Multiple Screens In One Modal - This is done same way we added multiple screens to a Stack

  // Deep Linking into a Modal TODO: (Check more into it)

  // Clear Cache: npx expo start --reset-cache
  
  // Auth Flow. When our app gave the ability to aithenticate users, we need two views which are login and logout. With file based routing we cant just comditionally define screens like we would in react mavigation so we use 'redirects'
  /**
   * Add auth redirect - Create a new folder called '(protected), this will contain screens a user cant access without being authenticated.
   * 
   * Storing the auth state -
   * We want to be able read and write auth states for uses on the app. create a 'utils/authContext.tsx'. cont... 
   * 
   * Persist auth state across app launches: We wrote the logic and stored the auth states which means that it is saved into memory, but when we refresh the app, it return to default, that isnt good for prod. We want to save and read on launch to device storage. We use AsyncStorage. @react-native-async-storage/async-storage. Check authContext for practical steps. 
   * 
   * Show Splash Screen while Auth state is undecided yet, a sample logic is made inside 'AuthContext' file. There we simulated a delay and included a splash screen to view an image while auth state is still being fetched. 
   */

  // Protected routes at a glance
  /**
   * We want to route unauthenticated users to a particular route (signIn), while the authenticated users are being routed to the app layouts. We use protected routes to achieve this by running certain checks and keep auth states persistently. The screens would be wrapped in a Stack.protected by giving it the guard prop so that when 'guard' is true, the screen may be accessed otherwise unauthorized. Open '../second-expo' for full practical example
   * 
   */


    // <View style={styles.container}>
    //   <Text style={{ fontWeight: "700" }}>Index Screen</Text>
    //   <Button title="Go to second screen" onPress={() => router.push("/second")} />
    //   <Link href={{ pathname:"/second", params: { name: "Ocean" } }} asChild>
    //     <Button title="Greet at /second" color="#f00" />
    //   </Link>
    //   <Button title="Greet Mary on /third" onPress={() => router.push({
    //     pathname: "/third",
    //     params: { name: "Mary" },
    //   })} />
    //   <Button title="View Proverb" onPress={() => router.push({ pathname: "/proverbs/[id]", params: { id: "2" } })} />
    //   <Button title="View Product" onPress={() => router.push({
    //     pathname: "/products/[category]/[productId]",
    //     params: { category: "Shoes", productId: "1234"}
    //   })} />
    //   <Link href="/(auth)/auths/first">
    //   {/* first-expo/src/app/(auth)/auths/first.tsx */}
    //     <Text style={{ textDecorationLine: "underline" }}>Go to (auth)</Text>
    //   </Link>
    // </View>

    <View style={styles.container}>
      <Text style={{ fontWeight: "700", fontSize: 18 }}>Index Screen</Text>
      <Button title="Push to /home-nested" onPress={() => router.push("/home-nested")}/>
      {canGoBack ? (
      <Button title="Back" onPress={() => router.back()} />
      ) : null }
      <br />
      <Button title="Open Alert" onPress={handleOpenAlert} />
      <br />
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <br />
      <Link href="/modal" push asChild>
      <Button title="Open Router Modal" />
      </Link>
      <Modal visible={modalVisible} 
      animationType="slide"
      // - for better view, instead of 'transparent', use -
      presentationStyle="pageSheet"
      onRequestClose={() => setModalVisible(false)}>
        <View style={styles.container}>
            <View style={{ padding: 12, borderRadius: "5px", backgroundColor: "white" }}>
                <Text style={{ fontSize: 18, fontWeight: "700", margin: 10 }}>Custom styled modal</Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
        </View>
      </Modal>
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
