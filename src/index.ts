// Import the native module. On web, it will be resolved to ReactNativePulseLogger.web.ts
// and on native platforms to ReactNativePulseLogger.ts
import { Platform } from "react-native";

import { ExpoNetworkLoggerViewProps } from "./ExpoNetworkLogger.types";
import ExpoNetworkLoggerModule from "./ExpoNetworkLoggerModule";
import ExpoNetworkLoggerView from "./ExpoNetworkLoggerView.ios";

export function enableLogging() {
  return ExpoNetworkLoggerModule.enableLogging();
}

export function launchScreen() {
  if (Platform.OS !== "android") {
    return;
  }
  ExpoNetworkLoggerModule.launchScreen();
}

export { ExpoNetworkLoggerView, ExpoNetworkLoggerViewProps };
