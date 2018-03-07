import React from 'react';
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const store = configureStore();

import HomeScreen from "./src/screens/Home/Home";
import JobScreen from "./src/screens/Job/Job";

// Register Screens
Navigation.registerComponent(
    "AR_Maintenace_App.HomeScreen",
    () => HomeScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "AR_Maintenace_App.JobScreen",
    () => JobScreen,
    store,
    Provider
);


// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "AR_Maintenace_App.HomeScreen",
        title: "Shipcom Wireless AR Mainenace",
        navigatorStyle: {navBarBackgroundColor: '#c8c8c8'}
    }
});