import React, { useEffect } from "react";
import AppContainer from "./src/navigations/AppNavigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { LogBox } from "react-native";
export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
