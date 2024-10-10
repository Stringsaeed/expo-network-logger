// Import the native module. On web, it will be resolved to ReactNativePulseLogger.web.ts
// and on native platforms to ReactNativePulseLogger.ts
import ReactNativePulseLoggerModule from "./ReactNativePulseLoggerModule";
import ReactNativePulseLoggerView from "./ReactNativePulseLoggerView";
import { ReactNativePulseLoggerViewProps } from "./ReactNativePulseLogger.types";

export async function enableLogging(value: boolean) {
  return await ReactNativePulseLoggerModule.enableLogging(value);
}

export { ReactNativePulseLoggerView, ReactNativePulseLoggerViewProps };
