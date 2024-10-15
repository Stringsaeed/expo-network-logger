package expo.modules.networklogger

import android.util.Log
import com.chuckerteam.chucker.api.Chucker
import com.facebook.react.modules.network.OkHttpClientProvider
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoNetworkLoggerModule : Module() {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    override fun definition() = ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('ExpoNetworkLogger')` in JavaScript.
        Name("ExpoNetworkLogger")

        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("enableLogging") {
            val context = appContext.reactContext?.applicationContext ?: return@Function false
            Log.d("ExpoNetworkLogger", "enableLogging")
            OkHttpClientProvider.setOkHttpClientFactory(ChuckerOkHttpFactory(context))
        }

        Function("launchScreen") {
            val context = appContext.reactContext?.applicationContext ?: return@Function false
            context.startActivity(Chucker.getLaunchIntent(context))
        }
    }
}
