import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts, Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato';

import Routes from './src/routes'
import ApplicationContextProvider from './src/contexts/app.context'


export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_700Bold, Lato_900Black
  }); 

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ApplicationContextProvider>
        <Routes />
      </ApplicationContextProvider>
    );
  }
}
