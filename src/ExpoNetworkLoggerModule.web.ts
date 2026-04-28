import { registerWebModule, NativeModule } from 'expo';

class ExpoNetworkLogger extends NativeModule {
  async enableLogging() {
    console.warn("enableLogging is not supported on web");
  }
  launchScreen() {
    console.warn("launchScreen is not supported on web");
  }
}

export default registerWebModule(ExpoNetworkLogger, 'ExpoNetworkLogger');
