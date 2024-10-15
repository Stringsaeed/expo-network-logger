package expo.modules.networklogger

import android.content.Context
import com.chuckerteam.chucker.api.ChuckerCollector
import com.chuckerteam.chucker.api.ChuckerInterceptor
import com.facebook.react.modules.network.OkHttpClientFactory
import com.facebook.react.modules.network.OkHttpClientProvider
import okhttp3.OkHttpClient

class ChuckerOkHttpFactory(private val context: Context) : OkHttpClientFactory {
    override fun createNewNetworkModuleClient(): OkHttpClient {
        val collector = ChuckerCollector(
            context = context, showNotification = false
        )

        val chuckerInterceptor =
            ChuckerInterceptor.Builder(context).collector(collector).createShortcut(true).build()


        val client =
            OkHttpClientProvider.createClientBuilder().addInterceptor(chuckerInterceptor).build()

        return client
    }
}