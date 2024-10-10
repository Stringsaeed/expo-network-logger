import ExpoModulesCore
import Pulse
import PulseProxy

public class ReactNativePulseLoggerModule: Module {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    public func definition() -> ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ReactNativePulseLogger')` in JavaScript.
        Name("ReactNativePulseLogger")
        
        // Defines a JavaScript function that always returns a Promise and whose native code
        // is by default dispatched on the different thread than the JavaScript runtime runs on.
        Function("enableLogging") { (value: Bool) in
            NetworkLogger.enableProxy()
        }
        
        // Enables the module to be used as a native view. Definition components that are accepted as part of the
        // view definition: Prop, Events.
        View(ReactNativePulseLoggerView.self) {
            
        }
    }
}
