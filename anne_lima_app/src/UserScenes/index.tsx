import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserStackNavigation } from './router';
import { UserProvider } from '../Global/UserProvider'
import { Login } from './login';
import { ForgetPassword } from './ForgetPassword'
import { NavigationContainer } from '@react-navigation/native';
import { SignUp } from './Signup';
import { MainPage } from './MainPage'

const StartStack = createStackNavigator<UserStackNavigation>()

export const MainNavigation: FunctionComponent = ()=> {

  return (
    <NavigationContainer>
      <UserProvider>
        <StartStack.Navigator screenOptions={{headerShown: false}}>
          <StartStack.Screen name="login" component={Login} />
          <StartStack.Screen name="mainPage" component={MainPage} />
          <StartStack.Screen name="signUp" component={SignUp} />
          <StartStack.Screen name="forgetPassword" component={ForgetPassword} />
        </StartStack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
