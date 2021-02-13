import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useContext } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { UserInfoContext } from '../../Context';
import { Appbar } from '../components/barsNavigation/Appbar'
import { BottomBar } from '../components/barsNavigation/BottomBarIcons';
import { SettingButton } from './components/SettingButton';
import { AdminPageNavigationProp } from './types';
import { style } from './style'



const AdminPage: FunctionComponent = ()=> {
    const navigator = useNavigation<AdminPageNavigationProp>()
    const { user, userDB } = useContext(UserInfoContext)
    console.log(userDB)
  return (
   <View style={{flexGrow:1}}>
       <Appbar
        onClick={()=>{}}
        image={{uri: user.photoURL}}
        text={`Admin: ${user?.displayName}`}
       />
       <ImageBackground
        source={require('../../assets/img/admin.jpg')}
        style={{width: '100%', height: 80}}
       >
       </ImageBackground>
       <View style={style.buttonContainer}>
       <SettingButton >
            see Users
       </SettingButton>
       <SettingButton>
            see Staff
       </SettingButton>
       <SettingButton onClick={()=>navigator.navigate('services')}>
            new service
       </SettingButton>
       <SettingButton onClick={()=>navigator.navigate('seeServices')}>
            Edit Service
       </SettingButton>
       </View>
       <BottomBar
            homeChange={()=> navigator.navigate('mainPage')}
            settingChange={()=>{ 
                if( userDB?.role === 'admin'){
                 navigator.navigate('adminPage')
                }else{
                 navigator.navigate('userProfile')}
             }}
       />
   </View>
  );
}



export default AdminPage
