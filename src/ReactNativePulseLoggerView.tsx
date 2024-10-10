import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ReactNativePulseLoggerViewProps } from "./ReactNativePulseLogger.types";

const NativeView: React.ComponentType<ReactNativePulseLoggerViewProps> =
  requireNativeViewManager("ReactNativePulseLogger");

export default function ReactNativePulseLoggerView(
  props: ReactNativePulseLoggerViewProps,
) {
  return <NativeView {...props} />;
}
