import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoNetworkLogger extends NativeModule {
  enableLogging: () => void;
  launchScreen?: () => void;
}

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule<ExpoNetworkLogger>('ExpoNetworkLogger');
