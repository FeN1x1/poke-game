import { SplashScreen } from "@capacitor/splash-screen"
import { StatusBar } from "@capacitor/status-bar"
import { Capacitor } from "@capacitor/core"

export const appInit = async () => {
  if (Capacitor.isPluginAvailable("StatusBar")) {
    await StatusBar.hide()
  }
  await SplashScreen.show({
    showDuration: 2000,
    autoHide: true,
  })
}
