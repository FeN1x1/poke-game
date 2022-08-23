import { SplashScreen } from "@capacitor/splash-screen"

export const showSplash = async () => {
  await SplashScreen.show({
    showDuration: 2000,
    autoHide: true,
  })
}
