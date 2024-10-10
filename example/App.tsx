import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
