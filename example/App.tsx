import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativePulseLogger from 'react-native-pulse-logger';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativePulseLogger.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
