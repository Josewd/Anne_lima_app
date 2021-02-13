import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useContext, useEffect } from 'react';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import { UserInfoContext } from '../../Context';
import { SplashNavigationProp } from './types';

const Splash: FunctionComponent = ()=> {
    const { user } = useContext(UserInfoContext)
    const navigator = useNavigation<SplashNavigationProp>()
 
        if(user?.uid){
                navigator.navigate('mainPage')
        }else{
                navigator.navigate('login')
        }


  return (
    <ImageBackground
        source={require('../../assets/img/splash.jpg')}
        style={{width: '100%', height: '100%', alignItems: 'center'}}
    >
        <Image 
        style={{marginTop: 100}}
        source={require('../../assets/img/AnneLima-Logotipo_200x200.png')}/>
        <ActivityIndicator size={60} color='#eb1b83' />
    </ImageBackground>
  );
}

export default Splash