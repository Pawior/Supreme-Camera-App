import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "./MyButton";
import * as MediaLibrary from "expo-media-library";
import FotoItem from "./FotoItem";

export const Gallery = ({ navigation }) => {
  const test = () => {
    console.log("tesgs");
  };
  //   const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [imageList, setImageList] = useState([
    {
      albumId: "-2075821635",
      creationTime: 1668592681000,
      duration: 0,
      filename: "28eafc40-e244-483c-a52c-ec1d73008e91.jpg",
      height: 3264,
      id: "356",
      mediaType: "photo",
      modificationTime: 1668592681000,
      uri: "file:///storage/emulated/0/DCIM/28eafc40-e244-483c-a52c-ec1d73008e91.jpg",
      width: 2448,
    },
    {
      albumId: "-2075821635",
      creationTime: 1668592683000,
      duration: 0,
      filename: "8d5beecf-0b58-4253-9ccf-8d439de91d74.jpg",
      height: 3264,
      id: "357",
      mediaType: "photo",
      modificationTime: 1668592683000,
      uri: "file:///storage/emulated/0/DCIM/8d5beecf-0b58-4253-9ccf-8d439de91d74.jpg",
      width: 2448,
    },
  ]);
  const [numColumns, setNumColumns] = useState(5);

  const fetchPhotos = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync();
    let obj = await MediaLibrary.getAssetsAsync({
      first: 100, // ilość pobranych assetów
      mediaType: "photo", // typ pobieranych danych, photo jest domyślne
    });
    setImageList([...obj.assets]);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  useEffect(() => {
    console.log(imageList[0]);
  }, [imageList]);
  const changeLayout = () => {
    if (numColumns == 5) {
      setNumColumns(1);
    } else setNumColumns(5);
  };
  const goToCamera = () => {
    navigation.navigate("CamView");
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <MyButton
          text="Layout"
          color="#DBA39A"
          passedFunc={changeLayout}
        ></MyButton>
        <MyButton
          text="Camera"
          color="#DBA39A"
          passedFunc={goToCamera}
        ></MyButton>
        <MyButton text="Delete" color="#DBA39A" passedFunc={test}></MyButton>
      </View>
      <View
        style={[styles.imgsContainer, numColumns == 1 ? styles.oneColumn : ""]}
      >
        {/* <FlatList
          //   numColumns={numColumns}
          //   key={numColumns}
          data={[
            {
              albumId: "-2075821635",
              creationTime: 1668592681000,
              duration: 0,
              filename: "28eafc40-e244-483c-a52c-ec1d73008e91.jpg",
              height: 3264,
              id: "356",
              mediaType: "photo",
              modificationTime: 1668592681000,
              uri: "file:///storage/emulated/0/DCIM/28eafc40-e244-483c-a52c-ec1d73008e91.jpg",
              width: 2448,
            },
          ]}
          renderItem={({ item }) => {
            <View style={{ flex: 1 }}>
              <Text>{item.id}</Text>
            </View>;
          }}
        ></FlatList> */}

        <FlatList
          numColumns={numColumns}
          key={numColumns}
          data={imageList}
          renderItem={({ item }) => (
            <FotoItem
              id={item.id}
              timestamp={item.creationTime}
              uri={item.uri}
            ></FotoItem>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EBE0",
  },
  btnsContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  imgsContainer: {
    flex: 7,
  },
  oneColumn: {
    alignItems: "center",
  },
});
