import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as ReactNativePulseLogger from "react-native-pulse-logger";

ReactNativePulseLogger.enableLogging(true);

export default function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(() => {
        // noop
      });
  }, []);

  return (
    <View style={styles.container}>
      <ReactNativePulseLogger.ReactNativePulseLoggerView
        style={{
          flex: 1,
        }}
      />
      <View pointerEvents="none" style={styles.overlay}>
        <Text style={styles.overlayText}>This is from react native</Text>
      </View>
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
