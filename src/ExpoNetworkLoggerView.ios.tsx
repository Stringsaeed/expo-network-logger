import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoNetworkLoggerViewProps } from './ExpoNetworkLogger.types';

const NativeView: React.ComponentType<ExpoNetworkLoggerViewProps> =
  requireNativeViewManager('ExpoNetworkLogger');

export default function ExpoNetworkLoggerView(props: ExpoNetworkLoggerViewProps) {
  return <NativeView {...props} />;
}
