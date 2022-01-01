import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main'; 
import CreateSpotted from '../pages/CreateSpotted';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Criar Spotted" component={CreateSpotted} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Routes;