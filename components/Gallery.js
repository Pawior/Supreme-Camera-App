import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import MyButton from "./MyButton";
import * as MediaLibrary from "expo-media-library";
import FotoItem from "./FotoItem";
import { Dimensions } from "react-native";

export const Gallery = ({ navigation }) => {
  //   const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [imageList, setImageList] = useState([]);
  const [numColumns, setNumColumns] = useState(5);
  const [selectedImages, setSelectedImages] = useState([]);
  const [deleteArr, setDeleteArr] = useState([]);

  useEffect(() => {
    console.log(selectedImages);
    setDeleteArr([]);
    selectedImages.forEach((selectedImage) => {
      setDeleteArr((prevArray) => [...prevArray, selectedImage.itemId]);
    });
  }, [selectedImages]);
  useEffect(() => {
    console.log(deleteArr);
  }, [deleteArr]);
  useEffect(() => {
    fetchPhotos();
  });

  const fetchPhotos = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync();
    const album = await MediaLibrary.getAlbumAsync("DCIM");
    const photos = await MediaLibrary.getAssetsAsync({
      album: album,
      sortBy: "creationTime",
      first: 50,
      mediaType: ["photo"],
    });
    // let obj = await MediaLibrary.getAssetsAsync({
    //   sortBy: "creationTime",
    //   first: 100, // ilość pobranych assetów
    //   mediaType: "photo", // typ pobieranych danych, photo jest domyślne
    // });
    setImageList([...photos.assets]);
  };
  // useEffect(() => {
  //   // console.log(imageList[0]);
  // }, [imageList]);

  const changeLayout = () => {
    if (numColumns == 5) {
      setNumColumns(1);
    } else setNumColumns(5);
  };
  const goToCamera = () => {
    navigation.navigate("Camview");
  };
  const deleteSelectedPhotos = async () => {
    await MediaLibrary.deleteAssetsAsync(deleteArr);
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
        <MyButton
          text="Delete"
          color="#DBA39A"
          passedFunc={deleteSelectedPhotos}
        ></MyButton>
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
              numColumns={numColumns}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
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
    // flexWrap: "wrap",
  },
  oneColumn: {
    alignItems: "center",
  },
});
