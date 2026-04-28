import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoNetworkLoggerViewProps } from './ExpoNetworkLogger.types';

const NativeView: React.ComponentType<ExpoNetworkLoggerViewProps> =
  requireNativeView('ExpoNetworkLogger');

export default function ExpoNetworkLoggerView(props: ExpoNetworkLoggerViewProps) {
  return <NativeView {...props} />;
}
