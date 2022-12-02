import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import ListItem from "./components/ListItem";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import { Camview } from "./components/Camview";
// import List from "./components/List";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen
          name="Camview"
          component={Camview}
          options={{ headerStyle: { backgroundColor: "#F0DBDB" } }}
        />
        {/* <Stack.Screen name="CameraScreen" component={ScreenCamera} /> */}

        {/* <Stack.Screen name="Users" component={Users} /> */}
        {/* <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="List" component={List} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
