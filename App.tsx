import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import Root from "./src/navigations/Root";
import * as SplashScreen from "expo-splash-screen";
import store from "./src/store";
import { useEffect } from "react";
import {
  useFonts,
  SourceSansPro_300Light,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import appTheme from "./src/theme";

SplashScreen.preventAutoHideAsync();
export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_300Light,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider theme={appTheme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </NativeBaseProvider>
  );
}
