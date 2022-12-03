import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./components/Main";
import BigPhoto from "./components/BigPhoto";
import Gallery from "./components/Gallery";
import { Camview } from "./components/Camview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{ headerStyle: { backgroundColor: "#F0DBDB" } }}
        />
        <Stack.Screen name="BigPhoto" component={BigPhoto} />
        <Stack.Screen
          name="Camview"
          component={Camview}
          options={{ headerStyle: { backgroundColor: "#F0DBDB" } }}
        />
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
