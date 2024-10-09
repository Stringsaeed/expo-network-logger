import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativePulseLogger.web.ts
// and on native platforms to ReactNativePulseLogger.ts
import ReactNativePulseLoggerModule from './ReactNativePulseLoggerModule';
import ReactNativePulseLoggerView from './ReactNativePulseLoggerView';
import { ChangeEventPayload, ReactNativePulseLoggerViewProps } from './ReactNativePulseLogger.types';

// Get the native constant value.
export const PI = ReactNativePulseLoggerModule.PI;

export function hello(): string {
  return ReactNativePulseLoggerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativePulseLoggerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativePulseLoggerModule ?? NativeModulesProxy.ReactNativePulseLogger);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativePulseLoggerView, ReactNativePulseLoggerViewProps, ChangeEventPayload };
