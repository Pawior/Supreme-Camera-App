import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MyButton from "./MyButton";

export const BigPhoto = ({ route, navigation }) => {
  const { itemId, uri } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: uri }}></Image>
      <View style={styles.btnsContainer}>
        <MyButton
          text="Share"
          color="#DBA39A"
          //   passedFunc={}
        ></MyButton>
        <MyButton
          text="Delete"
          color="#DBA39A"
          //   passedFunc={changeLayout}
        ></MyButton>
      </View>
    </View>
  );
};

export default BigPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    borderRadius: 18,
    // margin: 10,
    width: "85%",
    // height: "70%",
    aspectRatio: 9 / 16,
  },
  btnsContainer: {
    flexDirection: "row",
  },
});
