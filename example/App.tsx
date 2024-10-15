import { useEffect } from "react";
import { Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import * as ExpoNetworkLogger from "expo-network-logger";

ExpoNetworkLogger.enableLogging();

function doRequest() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(() => {
      // noop
    });
}

export default function App() {
  useEffect(() => {
    doRequest();
  }, []);

  return (
    <View style={styles.container}>
      <ExpoNetworkLogger.ExpoNetworkLoggerView
        style={{
          flex: 1,
        }}
      />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png",
        }}
        style={{
          width: 220,
          height: 220,
        }}
      />
      {Platform.OS === "android" && (
        <Button
          title="Launch Pulse"
          onPress={() => {
            doRequest().then(() => {
              ExpoNetworkLogger.launchScreen();
            });
          }}
        />
      )}
      {Platform.OS !== "android" && (
        <View pointerEvents="none" style={styles.overlay}>
          <Text style={styles.overlayText}>This is from react native</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
