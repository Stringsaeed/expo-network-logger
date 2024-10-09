import * as React from 'react';

import { ReactNativePulseLoggerViewProps } from './ReactNativePulseLogger.types';

export default function ReactNativePulseLoggerView(props: ReactNativePulseLoggerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
