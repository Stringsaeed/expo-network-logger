import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as ReactNativePulseLogger from "react-native-pulse-logger";
import { ReactNativePulseLoggerView } from "react-native-pulse-logger";

export default function App() {
  useEffect(() => {
    ReactNativePulseLogger.enableLogging(true).then(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          // noop
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      <ReactNativePulseLoggerView
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
