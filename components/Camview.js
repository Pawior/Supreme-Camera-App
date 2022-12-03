import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const rotateIcon = (
  <MaterialCommunityIcons name="rotate-3d-variant" size={45} color="#DBA39A" />
);
const cameraIcon = (
  <MaterialCommunityIcons name="camera-iris" size={60} color="#DBA39A" />
);

export const Camview = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  if (!permission) {
    return (
      <View>
        <Text> "Waiting for permission</Text>{" "}
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Wer need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const shotPhoto = async () => {
    console.log("Cyk cyk");
    if (camera) {
      console.log("dsd");
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      const asset = await MediaLibrary.createAssetAsync(data.uri);
      console.log(JSON.stringify(asset, null, 4));
    }
  };
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>{rotateIcon} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={shotPhoto}>
            <Text style={styles.text}> {cameraIcon}</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
