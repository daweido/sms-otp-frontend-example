import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LaunchScreen from '../screens/Launch.screen';
import CodeVerification from '../screens/CodeVerification.screen';
import SuccessScreen from '../screens/Success.screen';

function RootNavigator() {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="LaunchScreen" component={LaunchScreen} />
      <RootStack.Screen
        name="CodeVerificationScreen"
        component={CodeVerification}
      />
      <RootStack.Screen name="SuccessScreen" component={SuccessScreen} />
    </RootStack.Navigator>
  );
}

export default RootNavigator;
