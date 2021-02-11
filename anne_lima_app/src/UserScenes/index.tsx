import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserStackNavigation } from './router';
import { UserProvider } from '../Global/UserProvider'
import  Login  from './login';
import { NavigationContainer } from '@react-navigation/native';
import { SignUp } from './Signup';
import { MainPage } from './MainPage'
import UploadProfileImg from './UploadProfileImg';
import VerifyPhone from './verifyPhone';
import UserProfile from './UserProfile';
import Service from './CreateService';
import AdminPage from './AdminPage';

const StartStack = createStackNavigator<UserStackNavigation>()

export const MainNavigation: FunctionComponent = ()=> {

  return (
    <NavigationContainer>
      <UserProvider>
        <StartStack.Navigator
        initialRouteName='login' 
        screenOptions={{headerShown: false}}>
          <StartStack.Screen name="login" component={Login} />
          <StartStack.Screen name="mainPage" component={MainPage} />
          <StartStack.Screen name="signUp" component={SignUp} />
          <StartStack.Screen name="verifyPhone" component={VerifyPhone} />
          <StartStack.Screen name="userProfile" component={UserProfile}/>
          <StartStack.Screen name="uploadProfileImg" component={UploadProfileImg} />
          <StartStack.Screen name="adminPage" component={AdminPage} />
          <StartStack.Screen name="services" component={Service} />
        </StartStack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
