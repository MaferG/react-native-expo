import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => {
  return Font.loadAsync({
    'baloo-bold': require('./assets/fonts/BalooTammudu2-Bold.ttf'),
    'baloo-regular': require('./assets/fonts/BalooTammudu2-Regular.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <Navigator />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}

