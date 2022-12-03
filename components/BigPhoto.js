import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MyButton from "./MyButton";
import { deleteAssetsAsync } from "expo-media-library";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

export const BigPhoto = ({ route, navigation }) => {
  const { itemId, uri } = route.params;

  const deletePhoto = async () => {
    await MediaLibrary.deleteAssetsAsync(itemId);
    navigation.navigate("Gallery");
  };

  const sharePhoto = async () => {
    if (Sharing.isAvailableAsync()) {
      Sharing.shareAsync(uri);
    } else console.log("cant share right now");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: uri }}></Image>
      <View style={styles.btnsContainer}>
        <MyButton
          text="Share"
          color="#DBA39A"
          passedFunc={sharePhoto}
        ></MyButton>
        <MyButton
          text="Delete"
          color="#DBA39A"
          passedFunc={deletePhoto}
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
    width: "85%",
    aspectRatio: 9 / 16,
  },
  btnsContainer: {
    width: "100%",
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
