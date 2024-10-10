// Import the native module. On web, it will be resolved to ReactNativePulseLogger.web.ts
// and on native platforms to ReactNativePulseLogger.ts
import { ReactNativePulseLoggerViewProps } from "./ReactNativePulseLogger.types";
import ReactNativePulseLoggerModule from "./ReactNativePulseLoggerModule";
import ReactNativePulseLoggerView from "./ReactNativePulseLoggerView";

export function enableLogging(value: boolean) {
  return ReactNativePulseLoggerModule.enableLogging(value);
}

export { ReactNativePulseLoggerView, ReactNativePulseLoggerViewProps };
