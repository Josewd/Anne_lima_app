import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserStackNavigation } from './router';
import { UserProvider } from '../Global/UserProvider'
import { Login } from './login';
import { NavigationContainer } from '@react-navigation/native';

const StartStack = createStackNavigator<UserStackNavigation>()

export const MainNavigation: FunctionComponent = ()=> {

  return (
    <NavigationContainer>
      <UserProvider>
        <StartStack.Navigator screenOptions={{headerShown: false}}>
      {/* <StartStack.Screen name="splash" component={} />
          <StartStack.Screen name="signUp" component={} /> */}
          <StartStack.Screen name="login" component={Login} />
        </StartStack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
