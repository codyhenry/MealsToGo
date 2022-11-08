import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restuarants.screen";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <RestaurantsScreen />
    </>
  );
}
