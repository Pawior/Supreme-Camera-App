import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
let maxWidth = Dimensions.get("window").width;
let maxHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";

const FotoItem = ({
  id,
  timestamp,
  uri,
  numColumns,
  selectedImages,
  setSelectedImages,
}) => {
  const navigation = useNavigation();
  const [layout, setLayout] = useState(true);
  const [selected, setSelected] = useState(false);

  const goToBigPhoto = () => {
    navigation.navigate("BigPhoto", {
      itemId: id,
      uri: uri,
    });
  };
  const checkIfInArray = () => {
    console.log("Item ID: " + id);
    let isFound = false;
    isFound = selectedImages.some((image) => {
      if (image.itemId == id) {
        return true;
      }
      return false;
    });
    console.log(isFound);
    return isFound;
  };
  const selectImage = () => {
    if (checkIfInArray()) {
      console.log("mam juz to");
      const newListItems = selectedImages.filter(
        (listItem) => listItem.itemId !== id
      );
      setSelectedImages([...newListItems]);
      setSelected(false);
    } else {
      setSelected(true);
      setSelectedImages((prevArray) => [
        ...prevArray,
        {
          itemId: id,
          uri: uri,
        },
      ]);
    }
  };

  useEffect(() => {
    if (numColumns == 5) {
      setLayout(true);
    } else setLayout(false);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToBigPhoto} onLongPress={selectImage}>
        <Image
          style={[layout ? styles.gridPhoto : styles.singlePhoto]}
          source={{ uri: uri }}
        ></Image>
        <Text style={styles.idText}>{id}</Text>
        {/* <Text>ListItem</Text> */}
        {/* <Text>{timestamp}</Text> */}
        {/* <Text>{uri}</Text> */}
        {selected && <View style={styles.overlay} />}
      </TouchableOpacity>
    </View>
  );
};

export default FotoItem;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: "100%",
    // width: 80,
    // height: 70,
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 1.5,
    // borderWidth: 2,
  },
  gridPhoto: {
    width: maxWidth / 5 - 3,
    height: 65,
    borderRadius: 15,
  },
  singlePhoto: {
    width: maxWidth - 3,
    height: maxHeight / 4,
    borderRadius: 15,
  },

  idText: {
    position: "absolute",
    right: 0,
    bottom: 0,
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#DBA39A",
    opacity: 0.5,
    borderRadius: 15,
  },
});
