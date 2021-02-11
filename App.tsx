import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/Root.navigation';

function App() {
  return <NavigationContainer>{<RootNavigator />}</NavigationContainer>;
}

export default App;
