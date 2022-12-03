import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export const Main = ({ navigation }) => {
  const moveToList = () => {
    navigation.navigate("Gallery");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginRight: 10,
        }}
        onPress={moveToList}
      >
        <Text style={{ fontSize: 90, textAlign: "center" }}> Camera App</Text>
      </TouchableOpacity>
      <Text style={styles.smallText}> Supreme Camera Application</Text>
      <Text style={styles.smallText}> Shot Save Share</Text>
      <Text style={styles.smallText}> Perfect Polished Photos</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0DBDB",
  },
  smallText: {
    fontSize: 17,
    marginRight: 10,
  },
});
