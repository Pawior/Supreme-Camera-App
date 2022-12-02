import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FotoItem = ({ id, timestamp, uri }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: uri }}></Image>
      <Text style={styles.idText}>{id}</Text>
      {/* <Text>ListItem</Text> */}
      {/* <Text>{timestamp}</Text> */}
      {/* <Text>{uri}</Text> */}
    </View>
  );
};

export default FotoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  idText: {
    position: "absolute",
    right: 0,
    bottom: 0,
    color: "white",
  },
});
